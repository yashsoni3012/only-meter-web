// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ Mail transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// app.post("/contact", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   // ✅ Current date & time
//   const date_time = new Date().toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//   });

//   // 🔥 Instant response (fast UX)
//   res.status(200).json({ message: "Message received successfully!" });

//   try {
//     await Promise.all([
//       // ================= ADMIN EMAIL =================
//       transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_USER,
//         subject: "New Contact Inquiry - Only Meter India",
//          replyTo: email, // ✅ IMPORTANT FIX
//         html: `
//           <p>Hello Admin,</p>

//           <p>You have received a new inquiry from your website.</p>

//           <h3>Customer Details:</h3>
//           <p><b>Name:</b> ${name}</p>
//           <p><b>Email:</b> ${email}</p>
//           <p><b>Phone:</b> ${phone}</p>

//           <h3>Message:</h3>
//           <p>${message || "No message provided"}</p>

//           <p><b>Submitted On:</b> ${date_time}</p>

//           <br/>
//           <p>Please respond to the customer as soon as possible.</p>

//           <br/>
//           <p>Regards,<br/>Your Website System</p>
//         `,
//       }),

//       // ================= USER AUTO REPLY =================
//       transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "Thank You for Contacting Only Meter",
//         html: `
//           <h2>Hi ${name},</h2>

//           <p>Thank you for contacting <b>Only Meter India</b>.</p>

//           <p>We have received your inquiry and our team will contact you soon.</p>

//           <br/>
//           <p><b>Your Submitted Details:</b></p>
//           <p>Name: ${name}</p>
//           <p>Email: ${email}</p>
//           <p>Phone: ${phone}</p>

//           <br/>
//           <p>Regards,<br/>Only Meter Team</p>
//         `,
//       }),
//     ]);
//   } catch (error) {
//     console.error("Email error:", error);
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ SMTP transporter (DOMAIN EMAIL)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // helps avoid SSL issues
  },
});

// ✅ Verify SMTP connection
transporter.verify((err, success) => {
  if (err) {
    console.log("❌ SMTP Error:", err);
  } else {
    console.log("✅ SMTP Connected Successfully");
  }
});

app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  const date_time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  // 🔥 Instant response
  res.status(200).json({ message: "Message received successfully!" });

  try {
    await Promise.all([
      // ================= ADMIN EMAIL =================
      transporter.sendMail({
        from: `"Only Meter" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Contact Inquiry - Only Meter India",
        replyTo: email,
        html: `
          <p>Hello Admin,</p>

          <p>You have received a new inquiry from your website.</p>

          <h3>Customer Details:</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>

          <h3>Message:</h3>
          <p>${message || "No message provided"}</p>

          <p><b>Submitted On:</b> ${date_time}</p>

          <br/>
          <p>Please respond to the customer as soon as possible.</p>

          <br/>
          <p>Regards,<br/>Only Meter System</p>
        `,
      }),

      // ================= USER AUTO REPLY =================
      transporter.sendMail({
        from: `"Only Meter" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting Only Meter",
        html: `
          <h2>Hi ${name},</h2>

          <p>Thank you for contacting <b>Only Meter India</b>.</p>

          <p>We have received your inquiry and our team will contact you soon.</p>

          <br/>
          <p><b>Your Submitted Details:</b></p>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>

          <br/>
          <p>Regards,<br/>Only Meter Team</p>
        `,
      }),
    ]);
  } catch (error) {
    console.error("❌ Email error:", error);
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));