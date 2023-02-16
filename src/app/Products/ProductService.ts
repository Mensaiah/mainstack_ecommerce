import {
    CreateProductPayload,
    GetAllFilter,
    ServiceResponse,
    UpdateProductPayload,
} from "../../@types";
import Product from "./ProductModel";

import Validator from "./ProductValidator";

export default class ProductService {
    public static async create(
        payload: CreateProductPayload
    ): Promise<ServiceResponse> {
        const validationError = Validator.create(payload);
        if (validationError) {
            return { error: validationError, statusCode: 422 };
        }

        const newProduct = await Product.create({
            name: payload.name,
            description: payload.description,
            price: payload.price,
            quantity: payload.quantity,
            imageUrl: payload.imageUrl,
        });
        return { data: newProduct, statusCode: 201 };
    }

    public static async getAll(payload: GetAllFilter): Promise<ServiceResponse> {
        const { page = 1, limit =10} = payload;

        const allProducts = await Product.paginate({page, limit });

        return { data: allProducts, statusCode: 200 };
    }

    public static async getById(id): Promise<ServiceResponse> {
        const product = await Product.findById(id);
        if (!product) {
            return {
                error: "The product you are trying to get cannot be found",
                statusCode: 404,
            };
        }

        return { data: product, statusCode: 200 };
    }

    public static async update(
        id: string,
        payload: UpdateProductPayload
    ): Promise<ServiceResponse> {
        const validationError = Validator.update(payload);
        if (validationError) {
            return { error: validationError, statusCode: 422 };
        }

        await Product.updateOne({ _id: id }, payload);
        const updatedProduct = await Product.findById(id);
        return { data: updatedProduct, statusCode: 200 };
    }

    public static async delete(id: string): Promise<ServiceResponse> {
        const product = await Product.findById(id);
        if (!product) {
            return {
                error: "The product you are trying to delete cannot be found",
                statusCode: 404,
            };
        }
        await Product.findByIdAndDelete(id);
        return { data: id, statusCode: 204 };
    }
}
