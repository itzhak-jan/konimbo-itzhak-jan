import { SimpleProductModel } from "../models/SimpleProductModel";

export interface AppState {
    products: SimpleProductModel[];
    searchTerm: string;
}