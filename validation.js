const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(2).required(),
        email: Joi.string().min(2).required().email(),
        password: Joi.string().min(6).required(),
        grille: Joi.string().min(2).required(),
        rem: Joi.array()
    });
    //return schema.validate(data);

    return (data) => {
        const result = schema.validate(data);
        if( result.error ) {
          return res.status(400).json({
            message : result.error.details
          })
        }else return schema.validate(data);

};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

