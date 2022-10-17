import { FETCH_CATEGORIES, FETCH_ONE_PRODUCT, FETCH_PRODUCTS, FETCH_SUBCATEGORIES, RESET_SUBCATEGORIES } from "./types";


const initialState = {
    categories: [],
    subcategories: [],
    products: [],
    currentProduct: { id: -1, subcategory: { category: -1, name: "Категория Дефолт" } }
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        case FETCH_PRODUCTS:
            return { ...state, products: action.payload }
        case FETCH_SUBCATEGORIES:
            return { ...state, subcategories: action.payload }
        case FETCH_ONE_PRODUCT:
            return { ...state, currentProduct: action.payload }
        case RESET_SUBCATEGORIES:
            return { ...state, subcategories: [] }
        default:
            return state
    }
}