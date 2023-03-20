const Joi = require("joi");

function validateIncomeData(req, res) {
  const schema = Joi.object({
    category: Joi.string().min(3).max(30).required(),
    label: Joi.string().min(3).max(30).required(),
    description: Joi.string().required(),
  });
  const validatedData = schema.validate(req.body);
  if (validatedData.error) {
    return res.json({
      code: 400,
      message: validatedData.error.details,
    });
  }
}

module.exports = {
  validateBody(req, res, next) {
    validateIncomeData(req, res);
    next();
  },
};
