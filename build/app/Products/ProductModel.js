"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_ts_1 = require("mongoose-paginate-ts");
const productSchema = new mongoose_1.Schema({
    //model for product
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "ACTIVE",
        required: true,
    },
}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
            delete ret._id;
        },
    },
    timestamps: true,
    strict: false,
});
productSchema.plugin(mongoose_paginate_ts_1.mongoosePagination);
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
