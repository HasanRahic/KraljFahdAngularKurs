import { Review } from "./review";

export interface ProductModel {
    id: number;
    title: string;
    images: string [];
    description: string;
    category: string;
    price: number;
    rating: number;
    brand: string;
    discountPercentage: number;
    tags: string[];
    availabilityStatus: boolean;
    review: Review[];
}
