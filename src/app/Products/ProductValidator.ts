import Joi from "joi";

export default class TripValidator {
    static create(data) {
        const { error } = Joi.object({
           name: Joi.string().required(),
              description: Joi.string().required(),
                price: Joi.number().required(),
                quantity: Joi.number().required(),
                imageUrl: Joi.string().uri().required(),
        })
            .unknown()
            .validate(data);

        return error?.details[0].message.replace(/['"]/g, "");
    }

    static update(data) {
        const { error } = Joi.object({
            name: Joi.string().required(),
              description: Joi.string().required(),
                price: Joi.number().required(),
                quantity: Joi.number().required(),
                imageUrl: Joi.string().uri().required(),
            
        })
            .unknown()
            .validate(data);

        return error?.details[0].message.replace(/['"]/g, "");
    }
}
