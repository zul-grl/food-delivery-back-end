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
        <h1>Your password reset link</h1>
       <a href="https://food-delivery-back-end-0cz4.onrender.com/auth/change-password?id=${token}">click here</a>
    `,
  };
  await transporter.sendMail(mailOption);
};
