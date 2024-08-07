// lib/mailer.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Outlook SMTP server
  port: 587, // SMTP port
  secure: false, // Use TLS
  auth: {
    user: process.env.OUTLOOK_USER, // Your Outlook email address
    pass: process.env.OUTLOOK_PASS, // Your Outlook password
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

export async function sendVerificationCode(email: string, code: string) {
  const mailOptions = {
    from: process.env.OUTLOOK_USER,
    to: email,
    subject: 'Email Verification Code',
    text: `Your email verification code is ${code}`,
  };

  await transporter.sendMail(mailOptions);
}