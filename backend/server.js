const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
    const { name, phone, email, message } = req.body;

    try {
        // transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // App password
            },
        });

        // mail options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: "Only Meter - New Contact Request",
            html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Email failed to send" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));