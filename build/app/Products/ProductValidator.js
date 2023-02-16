"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class TripValidator {
    static create(data) {
        const { error } = joi_1.default.object({
            name: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            price: joi_1.default.number().required(),
            quantity: joi_1.default.number().required(),
            imageUrl: joi_1.default.string().uri().required(),
        })
            .unknown()
            .validate(data);
        return error === null || error === void 0 ? void 0 : error.details[0].message.replace(/['"]/g, "");
    }
    static update(data) {
        const { error } = joi_1.default.object({
            name: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            price: joi_1.default.number().required(),
            quantity: joi_1.default.number().required(),
            imageUrl: joi_1.default.string().uri().required(),
        })
            .unknown()
            .validate(data);
        return error === null || error === void 0 ? void 0 : error.details[0].message.replace(/['"]/g, "");
    }
}
exports.default = TripValidator;
