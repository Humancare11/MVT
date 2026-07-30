// One-off asset optimization pass: recompresses oversized source images in place.
// Keeps original filenames/extensions so no import statements need to change.
//
// sharp.cache(false) is required on Windows: sharp's internal operation cache
// keeps the source file's handle open even after toBuffer() resolves, which
// causes a sharing-violation ("UNKNOWN: unknown error, open ...") when writing
// the result back over the same path. Disabling the cache releases the handle
// immediately after each operation.
import sharp from "sharp";
import fg from "fast-glob";
import { stat, writeFile } from "node:fs/promises";
import path from "node:path";

sharp.cache(false);

const MAX_WIDTH = 1920;
const WEBP_QUALITY = 78;
const JPEG_QUALITY = 78;

const patterns = [
  "src/assets/**/*.{webp,jpg,jpeg,png,WEBP,JPG,JPEG,PNG}",
  "src/departments/**/*.{webp,jpg,jpeg,png,WEBP,JPG,JPEG,PNG}",
  "public/assets/**/*.{webp,jpg,jpeg,png,WEBP,JPG,JPEG,PNG}",
];

const files = await fg(patterns, { cwd: process.cwd(), absolute: true });

let totalBefore = 0;
let totalAfter = 0;
let optimized = 0;
let skipped = 0;
let errored = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const before = (await stat(file)).size;
  totalBefore += before;

  try {
    const image = sharp(file, { failOn: "none" });
    const metadata = await image.metadata();

    let pipeline = image.rotate();
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    let outBuffer;
    if (ext === ".webp") {
      outBuffer = await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toBuffer();
    } else if (ext === ".jpg" || ext === ".jpeg") {
      outBuffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    } else if (ext === ".png") {
      outBuffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
    } else {
      skipped++;
      continue;
    }

    if (outBuffer.length < before) {
      await writeFile(file, outBuffer);
      totalAfter += outBuffer.length;
      optimized++;
      console.log(
        `OK   ${path.relative(process.cwd(), file)}  ${(before / 1024).toFixed(0)}KB -> ${(outBuffer.length / 1024).toFixed(0)}KB`,
      );
    } else {
      totalAfter += before;
      skipped++;
      console.log(`SKIP ${path.relative(process.cwd(), file)} (already optimal)`);
    }
  } catch (err) {
    totalAfter += before;
    errored++;
    console.error(`ERR  ${path.relative(process.cwd(), file)}: ${err.message}`);
  }
}

console.log("\n--- Summary ---");
console.log(`Files scanned:   ${files.length}`);
console.log(`Optimized:       ${optimized}`);
console.log(`Skipped:         ${skipped}`);
console.log(`Errored:         ${errored}`);
console.log(`Total before:    ${(totalBefore / 1024 / 1024).toFixed(1)}MB`);
console.log(`Total after:     ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
console.log(`Saved:           ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)}MB`);
