const express = require("express");

const router = express.Router();

const mailControllers = require("./controllers/mailControllers");
const validateControllers = require("./controllers/validateControllers");

router.post(
  "/email",
  validateControllers.validateUser,
  mailControllers.main,
  mailControllers.autoMail
);

module.exports = router;
