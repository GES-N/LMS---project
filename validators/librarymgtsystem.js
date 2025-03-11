import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().trim().required(),
  author: Joi.string().trim().required(),
  publishedYear: Joi.number().required(),
  category: Joi.string().required(),
  copiesAvailable: Joi.number().required(),
  totalCopies: Joi.number().required(),
});
