const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(6)
    .required(),
  email: Joi.string()
    .email()
    .required()
}).options({ abortEarly: false });

module.exports = schema;
