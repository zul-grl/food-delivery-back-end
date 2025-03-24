import nodemailer from "nodemailer";

export const sendEmail = async (email: string, token: string) => {
  const mailSecret = process.env.MAIL_SECRET;
  const mail = process.env.MAIL;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: mail,
      pass: mailSecret,
    },
  });

  const mailOption = {
    from: "Nom nom foods",
    to: email,
    subject: "Reset your password",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="font-size: 24px; color: #007BFF; text-align: center; margin-bottom: 20px;">
        Your Password Reset Link
      </h1>
      <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        You have requested to reset your password.
      </p>
      <div style="text-align: center;">
        <a href="https://food-delivery-back-end-0cz4.onrender.com/auth/change-password?id=${token}" 
           style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 4px; font-size: 16px;">
          Reset Password
        </a>
      </div>
    </div>
  `,
  };
  await transporter.sendMail(mailOption);
};
