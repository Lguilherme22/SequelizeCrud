import { RequestHandler } from "express";
import Joi from "joi";

const requestValidator: RequestHandler = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    age: Joi.number().integer().min(12).max(99).required(),
    email: Joi.string().email().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).json({
      message: error.details[0].message,
    });
    return;
  }

  next();
};

export default requestValidator;
