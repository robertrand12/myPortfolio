require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL_ADRESS, EMAIL_PASSWORD } = process.env;

const main = (req, res) => {
  const data = req.body;

  nodemailer
    .createTransport({
      host: "smtp.orange.fr",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_ADRESS,
        pass: EMAIL_PASSWORD,
      },
    })
    .sendMail({
      from: `${data.name} <${data.email}>`,
      to: EMAIL_ADRESS,
      subject: "Message via mon portfolio",
      html: `
    <p>${data.message}</p>
    `,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  main,
};
