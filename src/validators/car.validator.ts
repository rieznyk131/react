import Joi from 'joi';

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]/).min(1).max(20).required().messages({
        'string.pattern.base': 'enter correct value',
        'string.min': 'brand name should be at least 1 characters',
        'string.max': 'brand name should be max 20 characters',
        'string.empty': 'brand is required'

    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.max': 'price should be max 1000000',
        'number.base': 'price is required'
    }),
    year: Joi.number().min(1990).max(2026).required().messages({
        'number.min': 'year should be min 1996',
        'number.max': 'year should be max 2026',
        'number.base': 'year is required'

    })
})