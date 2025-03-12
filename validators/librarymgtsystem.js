import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string(),
  publishedYear: Joi.number().required(),
  category: Joi.string().required(),
  copiesAvailable: Joi.number().required(),
  totalCopies: Joi.number().required(),
});

export const updateBookSchema = Joi.object({
  title: Joi.string().optional(),
  author: Joi.string().optional(),
  publishedYear: Joi.number().optional(),
  category: Joi.string().optional(),
  copiesAvailable: Joi.number().optional(),
  totalCopies: Joi.number().optional(),
});