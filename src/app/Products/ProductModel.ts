import { Schema, model } from "mongoose";
import { IProduct } from "../../@types";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";

const productSchema = new Schema<IProduct>(
    {
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

    },
    {
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret.__v;
                delete ret._id;
            },
        },
        timestamps: true,
        strict: false,
    }
);
productSchema.plugin(mongoosePagination);
const Product: Pagination<IProduct> = model<IProduct, Pagination<IProduct>>("Product", productSchema);
export default Product
