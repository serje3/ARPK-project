import {
    CREATE_ORDER_FAILED,
    CREATE_ORDER_SUCCESS,
    CREATE_QUESTION_FAILED,
    CREATE_QUESTION_SUCCESS,
    CREATE_SERVICE_ORDER_FAILED,
    CREATE_SERVICE_ORDER_SUCCESS,
    FETCH_CATEGORIES,
    FETCH_CREATE_ORDER,
    FETCH_CREATE_QUESTION,
    FETCH_CREATE_SERVICE_ORDER,
    FETCH_ONE_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_SUBCATEGORIES,
    RESET_ORDER_INFORMATION,
    RESET_SUBCATEGORIES, SET_ONE_PRODUCT
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
    },
    question: {
        status: -1,
        fetching: false,
        message: {}
    },
    service: {
        status: -1,
        fetching: false,
        message: {}
    }
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, products: action.payload }
        case FETCH_ONE_PRODUCT:
        case SET_ONE_PRODUCT:
            return { ...state, currentProduct: action.payload }
        case FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        case FETCH_SUBCATEGORIES:
            return { ...state, subcategories: action.payload }
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

        case FETCH_CREATE_QUESTION:
            return { ...state, question: { status: -1, fetching: true, message: {} }}
        case CREATE_QUESTION_SUCCESS:
            return { ...state, question: { status: 201, fetching: false, message: {} }}
        case CREATE_QUESTION_FAILED:
            return { ...state, question: {...action.payload, fetching: false }}

        case FETCH_CREATE_SERVICE_ORDER:
            return { ...state, service: { status: -1, fetching: true, message: {} }}
        case CREATE_SERVICE_ORDER_SUCCESS:
            return { ...state, service: { status: 201, fetching: false, message: {} }}
        case CREATE_SERVICE_ORDER_FAILED:
            return { ...state, service: {...action.payload, fetching: false }}

        default:
            return state
    }
}