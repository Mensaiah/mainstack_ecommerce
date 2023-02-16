import { Request, Response } from "express";
import { resolveResponse } from "../../utils/helpers";
import ProductService from "./ProductService";

export default class ProductController {
    public static async create(req: Request, res: Response) {
        const response = await ProductService.create(req.body);
        return resolveResponse(response, res);
    }

    public static async getAll(req: Request, res: Response) {
        const response = await ProductService.getAll(req.query);
        return resolveResponse(response, res);
    }

    public static async getById(req: Request, res: Response) {
        const response = await ProductService.getById(req.params.id);
        return resolveResponse(response, res);
    }

    public static async update(req: Request, res: Response) {
        const response = await ProductService.update(req.params.id, req.body);
        return resolveResponse(response, res);
    }

    public static async delete(req: Request, res: Response) {
        const response = await ProductService.delete(req.params.id);
        return resolveResponse(response, res);
    }
}
