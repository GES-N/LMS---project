import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  publishedYear: Joi.number().getFullYear().required(),
  genre: Joi.string().required(),
  availableCopies: Joi.number().required()
});

