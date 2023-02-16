"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const router = (0, express_1.Router)();
const ProductControllers_1 = __importDefault(require("../app/Products/ProductControllers"));
router.post("/", ProductControllers_1.default.create);
router.get("/", ProductControllers_1.default.getAll);
router.get("/:id", ProductControllers_1.default.getById);
router.put("/:id", ProductControllers_1.default.update);
router.delete("/:id", ProductControllers_1.default.delete);
exports.default = router;
