const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  message: Joi.string().required(),
});

const validateUser = (req, res, next) => {
  const { name, email, message } = req.body;

  const { error } = userSchema.validate(
    { name, email, message },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
