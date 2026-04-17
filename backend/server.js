// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/send-mail", async (req, res) => {
//     const { name, phone, email, message } = req.body;

//     try {
//         // transporter
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS, // App password
//             },
//         });

//         // mail options
//         const mailOptions = {
//             from: email,
//             to: process.env.EMAIL_USER,
//             subject: "Only Meter - New Contact Request",
//             html: `
//         <h2>New Contact Request</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ success: true, message: "Email sent successfully" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Email failed to send" });
//     }
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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // app password
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    // 📩 Mail to ADMIN
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h3>New User Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    // 📩 Auto-reply to USER ✅
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting <b>Only Meter</b>.</p>
        <p>We have received your details and will contact you soon.</p>
        <br/>
        <p>Regards,<br/>Only Meter Team</p>
      `,
    });

    res.status(200).json({ message: "Emails sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));