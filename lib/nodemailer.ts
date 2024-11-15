import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/verify-email?token=${verificationToken}`;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: "Verify your newsletter subscription",
    html: `
      <h1>Verify your email address</h1>
      <p>Thank you for subscribing to our newsletter. Please click the link below to verify your email address:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>If you didn't subscribe to our newsletter, you can ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
