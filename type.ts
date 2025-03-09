type review = {
    reviewerName: string;
    rating: number;
    comment: string;
    reviewerEmail: string;
};
export interface ProductType {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions:{
        depth: number;
        height: number;
        width: number;
    };
    discountPercentage: number;
    id: number;
    images: string[];
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: review[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
    quantity?: number;
}

export interface StateType {
    shofy:{
        cart: ProductType[];
        favorite:  ProductType[];
        userInfo: any;
    };
}