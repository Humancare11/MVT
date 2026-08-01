// Codemod: adds explicit width/height (from real intrinsic image size) and
// loading/decoding hints to <img> tags that are missing them, to eliminate
// layout shift (CLS) without touching CSS-driven display size (object-fit
// still controls the rendered box — these attributes only fix the
// browser's aspect-ratio reservation before the image loads).
import sharp from "sharp";
import fg from "fast-glob";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

sharp.cache(false);

const EXCLUDE_FIRST_IMG_LOADING_EAGER = new Set(); // filled per-file if needed

const files = await fg(["src/pages/**/*.jsx", "src/component/**/*.jsx"], {
  cwd: process.cwd(),
  absolute: true,
});

const dimCache = new Map();
async function getDims(absPath) {
  if (dimCache.has(absPath)) return dimCache.get(absPath);
  try {
    const meta = await sharp(absPath).metadata();
    const dims = { width: meta.width, height: meta.height };
    dimCache.set(absPath, dims);
    return dims;
  } catch {
    dimCache.set(absPath, null);
    return null;
  }
}

const IMG_EXT = /\.(webp|jpe?g|png|avif)$/i;

let filesChanged = 0;
let tagsFixed = 0;
let tagsSkipped = [];

for (const file of files) {
  let src = await readFile(file, "utf8");
  const original = src;
  const dir = path.dirname(file);

  // Build import map: localName -> resolved absolute path (only image imports)
  const importMap = new Map();
  const importRegex = /import\s+(\w+)\s+from\s+["'](\..*?)["'];?/g;
  let im;
  while ((im = importRegex.exec(src))) {
    const [, local, rel] = im;
    if (IMG_EXT.test(rel)) {
      importMap.set(local, path.resolve(dir, rel));
    }
  }

  // Match <img ... /> or <img ...></img> tags (self-closing JSX images)
  const imgTagRegex = /<img\b([^>]*?)\/?>/gs;
  let match;
  let offset = 0;
  let out = "";
  let lastIndex = 0;

  while ((match = imgTagRegex.exec(src))) {
    const full = match[0];
    const attrs = match[1];

    const hasWidth = /\bwidth\s*=/.test(attrs);
    const hasHeight = /\bheight\s*=/.test(attrs);
    if (hasWidth && hasHeight) continue;

    // Resolve src: either src="literal/path.ext" or src={Identifier}
    let absImgPath = null;
    const literalMatch = attrs.match(/\bsrc\s*=\s*"([^"]+)"/);
    const exprMatch = attrs.match(/\bsrc\s*=\s*\{(\w+)\}/);

    if (exprMatch && importMap.has(exprMatch[1])) {
      absImgPath = importMap.get(exprMatch[1]);
    } else if (literalMatch && !/^https?:\/\//.test(literalMatch[1]) && IMG_EXT.test(literalMatch[1])) {
      // literal path like "/humancare-logo.webp" -> public/ dir
      const p = literalMatch[1].startsWith("/")
        ? path.resolve(process.cwd(), "public", "." + literalMatch[1])
        : path.resolve(dir, literalMatch[1]);
      absImgPath = p;
    }

    if (!absImgPath) {
      tagsSkipped.push(`${file}: ${full.slice(0, 60).replace(/\n/g, " ")}`);
      continue;
    }

    const dims = await getDims(absImgPath);
    if (!dims) {
      tagsSkipped.push(`${file}: could not read dims for ${absImgPath}`);
      continue;
    }

    let newAttrs = attrs;
    const insert = [];
    if (!hasWidth) insert.push(`width={${dims.width}}`);
    if (!hasHeight) insert.push(`height={${dims.height}}`);
    if (!/\bdecoding\s*=/.test(attrs)) insert.push(`decoding="async"`);

    // append before trailing whitespace of attrs
    newAttrs = attrs.replace(/\s*$/, "") + "\n        " + insert.join("\n        ") + "\n      ";

    const newFull = full.replace(attrs, newAttrs);
    src = src.slice(0, match.index) + newFull + src.slice(match.index + full.length);

    // adjust regex lastIndex since string length changed
    imgTagRegex.lastIndex = match.index + newFull.length;
    tagsFixed++;
  }

  if (src !== original) {
    await writeFile(file, src, "utf8");
    filesChanged++;
  }
}

console.log(`Tags fixed: ${tagsFixed}`);
console.log(`Tags skipped (${tagsSkipped.length}):`);
for (const s of tagsSkipped) console.log("  " + s);
