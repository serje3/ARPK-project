import {
    INIT_RESET_SUBCATEGORIES,
    REQUEST_CATEGORIES, REQUEST_ONE_PRODUCT,
    REQUEST_PRODUCTS,
    REQUEST_SUBCATEGORIES,
} from "./types";


export function fetchCategories() {
    return {
        type: REQUEST_CATEGORIES,
    }
}

export function fetchProducts() {
    return {
        type: REQUEST_PRODUCTS
    }
}

export function fetchOneProduct(id) {
    return {
        type: REQUEST_ONE_PRODUCT,
        payload: id
    }
}

export function fetchSubcategories(categoryId) {
    return {
        type: REQUEST_SUBCATEGORIES,
        payload: categoryId
    }
}

export function resetSubcategories() {
    return {
        type: INIT_RESET_SUBCATEGORIES
    }
}