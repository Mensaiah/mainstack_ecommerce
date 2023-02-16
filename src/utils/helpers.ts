import { Response } from "express";
import { ServiceResponse } from "../@types";

export function resolveResponse(response: ServiceResponse, res: Response) {
    const { error, data, statusCode } = response;
    if (error) {
        return res.status(statusCode).json({
            success: false,
            error,
        });
    }
    if (data.docs) {
        const mainPayload = data.docs.map((docs) => {
            docs.id = docs._id;
            delete docs.__v;
            delete docs._id;

            return docs;
        });
        return res.status(statusCode).json({
            success: true,
            total: data.totalDocs,
            data: mainPayload,
            limit: data.limit,
            page: data.page,
            pages: data.totalPages || 1,
        });
    }
    return res.status(statusCode).json({ success: true, data });
}
