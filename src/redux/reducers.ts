import { AppState } from './types';
import { ActionType, SET_PRODUCTS, SET_SEARCH_TERM } from './actions';

const initialState: AppState = {
    products: [],
    searchTerm: ''
};

export const rootReducer = (
    state = initialState,
    action: ActionType
): AppState => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
};

