export type ServiceResponse = {
    data?: any;
    error?: string;
    statusCode: number;
};

export type CreateProductPayload = {
    name: string;
    description: string;
    price: Number;
    quantity: Number;
    imageUrl: string;
};

export interface IProduct extends CreateProductPayload {
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export type UpdateProductPayload = {
    name: string;
    description: string;
    price: Number;
    quantity: Number;
    imageUrl: string;
    status: string;
};


export type GetAllFilter = {
    page?: Number;
    limit?: Number;
};