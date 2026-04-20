import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/\w/).min(3).max(10).required().messages({
        'string.min':'Username should be at least 3 characters',
        'string.max':'Username should be max 10 characters',
        'string.empty': 'Username is required'
    }),
    password: Joi.string().pattern(/\w/).min(5).max(10).required().messages({
        'string.min':'Password should be at least 5 characters',
        'string.max':'Password should be max 10 characters',
        'string.empty': 'Password is required'
    }),
    age: Joi.number().min(1).max(117).required().messages({
        'number.min':'Age should be at least 1',
        'number.max':'Age should be max 117',
        'number.base': 'Age is required'

    })
})

export default userValidator;