import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !phone || !email || !service) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,

      // ✅ CC emails added
      cc: [
        "medicaltourism@humancareworldwide.com",
        "md@humancareworldwide.com",
        "coo@humancareworldwide.com"
      ],

      subject: "New Contact Form Submission",
      html: `
        <h3>MVT Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email failed to send" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
