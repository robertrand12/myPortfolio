require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL_ADRESS, EMAIL_PASSWORD } = process.env;

const main = (req, res, next) => {
  const data = req.body;

  nodemailer
    .createTransport({
      host: "smtp.orange.fr",
      port: 25,
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
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const autoMail = (req, res) => {
  const data = req.body;

  nodemailer
    .createTransport({
      host: "smtp.orange.fr",
      port: 25,
      secure: true,
      auth: {
        user: EMAIL_ADRESS,
        pass: EMAIL_PASSWORD,
      },
    })
    .sendMail({
      from: `Bertrand Robert <${EMAIL_ADRESS}>`,
      to: data.email,
      subject: "Votre message sur mon portfolio",
      html: `
      <h2>Bonjour ${data.name}</h2>
    <p>Je vous remercie pour l'envoi de votre message. Je vous répondrai avec plaisir dans les plus brefs délais</p>
    <h3>Bertrand Robert</h3>
    <p>Votre message : ${data.message}</p>
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
  autoMail,
};
