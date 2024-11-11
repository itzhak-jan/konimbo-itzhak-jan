import { SimpleProductModel } from '../models/SimpleProductModel';

// Action Types
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

// Action Interfaces
interface SetProductsAction {
    type: typeof SET_PRODUCTS;
    payload: SimpleProductModel[];
}

interface SetSearchTermAction {
    type: typeof SET_SEARCH_TERM;
    payload: string;
}
// export enum ActionType{
//     SetProductsAction,
//     SetSearchTermAction
// }
 export type ActionType = SetProductsAction | SetSearchTermAction;

// Action Creators
export const setProducts = (products: SimpleProductModel[]): SetProductsAction => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setSearchTerm = (searchText: string): SetSearchTermAction => ({
    type: SET_SEARCH_TERM,
    payload: searchText
});