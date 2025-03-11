import Joi from "joi";

export const addBookSchema = Joi.object({
  title: Joi.string().trim().required(),
  author: Joi.string().trim().required(),
  publishedYear: Joi.number().required(),
  category: Joi.string().required(),
  copiesAvailable: Joi.number().required(),
  totalCopies: Joi.number().required(),
});

export const updateBookSchema = Joi.object({
  title: Joi.string().trim().optional(),
  author: Joi.string().trim().optional(),
  publishedYear: Joi.number().optional(),
  category: Joi.string().optional(),
  copiesAvailable: Joi.number().optional(),
  totalCopies: Joi.number().optional(),
});