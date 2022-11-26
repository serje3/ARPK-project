import {
    INIT_RESET_SUBCATEGORIES,
    REQUEST_ALL_PRODUCTS_CATEGORIES,
    REQUEST_CATEGORIES,
    REQUEST_CREATE_ORDER,
    REQUEST_CREATE_QUESTION,
    REQUEST_ONE_PRODUCT,
    REQUEST_PRODUCTS,
    REQUEST_SUBCATEGORIES,
    SAVE_FILTER,
    SAVE_SEARCHED,
    SAVE_SORT,
    REQUEST_CREATE_SERVICE_ORDER,
    SET_ONE_PRODUCT,
    REQUEST_SERVICES,
    REQUEST_ONE_SERVICE, REQUEST_NEWS
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

export function fetchAll() {
    // products and categories
    return {
        type: REQUEST_ALL_PRODUCTS_CATEGORIES
    }
}

export function fetchOneProduct(id) {
    return {
        type: REQUEST_ONE_PRODUCT,
        payload: id
    }
}

export function setOneProduct(product){
    return {
        type: SET_ONE_PRODUCT,
        payload: product
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

export function createOrder(form) {
    return {
        type: REQUEST_CREATE_ORDER,
        payload: form
    }
}

export function createQuestion(form) {
    return {
        type: REQUEST_CREATE_QUESTION,
        payload: form
    }
}

export function createServiceOrder(form){
    return {
        type: REQUEST_CREATE_SERVICE_ORDER,
        payload: form
    }
}

export function saveFilter(filterType, data) {
    return {
        type: SAVE_FILTER,
        payload: {
            type: filterType,
            data: data
        }
    }
}

export function saveSort(sortType, data) {
    return {
        type: SAVE_SORT,
        payload: {
            type: sortType,
            data: data
        }
    }
}

export function saveSearched(searchType, data){
    return {
        type: SAVE_SEARCHED,
        payload: {
            type: searchType,
            data: data
        }
    }
}

export function fetchServices(){
    return {
        type: REQUEST_SERVICES
    }
}

export function fetchOneService(id){
    return {
        type: REQUEST_ONE_SERVICE,
        payload: id
    }
}


export function fetchNews(pathname, fetchImages = false){
    return{
        type: REQUEST_NEWS,
        payload: {
            pathname,
            fetchImages
        }
    }
}