import {
    CREATE_ORDER_FAILED,
    CREATE_ORDER_SUCCESS,
    FETCH_CATEGORIES, FETCH_CREATE_ORDER,
    FETCH_ONE_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_SUBCATEGORIES, RESET_ORDER_INFORMATION,
    RESET_SUBCATEGORIES
} from "./types";


const initialState = {
    categories: [],
    subcategories: [],
    products: [],
    currentProduct: { id: -1, subcategory: { category: -1, name: "" } },
    order: {
        status: -1,
        fetching: false,
        message: {}
    }
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
        case FETCH_CREATE_ORDER:
            return { ...state, order: { status: -1, fetching: true, message: {} }}
        case CREATE_ORDER_SUCCESS:
            return { ...state, order: { status: 201, fetching: false, message: {} }}
        case CREATE_ORDER_FAILED:
            return { ...state, order: {...action.payload, fetching: false }}
        case RESET_ORDER_INFORMATION:
            return { ...state, order: initialState.order}
        default:
            return state
    }
}