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
const helpers_1 = require("../../utils/helpers");
const ProductService_1 = __importDefault(require("./ProductService"));
class ProductController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ProductService_1.default.create(req.body);
            return (0, helpers_1.resolveResponse)(response, res);
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ProductService_1.default.getAll(req.query);
            return (0, helpers_1.resolveResponse)(response, res);
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ProductService_1.default.getById(req.params.id);
            return (0, helpers_1.resolveResponse)(response, res);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ProductService_1.default.update(req.params.id, req.body);
            return (0, helpers_1.resolveResponse)(response, res);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield ProductService_1.default.delete(req.params.id);
            return (0, helpers_1.resolveResponse)(response, res);
        });
    }
}
exports.default = ProductController;
