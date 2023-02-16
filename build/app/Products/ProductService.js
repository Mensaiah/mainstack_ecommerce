"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("./ProductModel"));
const ProductValidator_1 = __importDefault(require("./ProductValidator"));
class ProductService {
    static create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validationError = ProductValidator_1.default.create(payload);
            if (validationError) {
                return { error: validationError, statusCode: 422 };
            }
            const newProduct = yield ProductModel_1.default.create({
                name: payload.name,
                description: payload.description,
                price: payload.price,
                quantity: payload.quantity,
                imageUrl: payload.imageUrl,
            });
            return { data: newProduct, statusCode: 201 };
        });
    }
    static getAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 1, limit = 10 } = payload;
            const allProducts = yield ProductModel_1.default.paginate({ page, limit });
            return { data: allProducts, statusCode: 200 };
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield ProductModel_1.default.findById(id);
            if (!product) {
                return {
                    error: "The product you are trying to get cannot be found",
                    statusCode: 404,
                };
            }
            return { data: product, statusCode: 200 };
        });
    }
    static update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validationError = ProductValidator_1.default.update(payload);
            if (validationError) {
                return { error: validationError, statusCode: 422 };
            }
            yield ProductModel_1.default.updateOne({ _id: id }, payload);
            const updatedProduct = yield ProductModel_1.default.findById(id);
            return { data: updatedProduct, statusCode: 200 };
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield ProductModel_1.default.findById(id);
            if (!product) {
                return {
                    error: "The product you are trying to delete cannot be found",
                    statusCode: 404,
                };
            }
            yield ProductModel_1.default.findByIdAndDelete(id);
            return { data: id, statusCode: 204 };
        });
    }
}
exports.default = ProductService;
