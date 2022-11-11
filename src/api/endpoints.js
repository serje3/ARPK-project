import { settings } from "../settings";


const apiUrl = settings.apiUrl

export const endpoints = {
    // GET
    products: apiUrl + "products/",
    // GET
    getProductOne: (id) => apiUrl + "products/" + id,
    // GET
    category: apiUrl + "category/",
    // GET
    getSubCategory: (id) => apiUrl + "category/" + id,
    // POST
    orders: apiUrl + "orders/",
    // POST
    question: apiUrl + "question/",
    // POST
    serviceOrder: apiUrl + "service-order/"
}