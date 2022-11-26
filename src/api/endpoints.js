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
    // GET
    services: apiUrl + "services/",
    // GET
    getService: (id) => apiUrl + "services/" + id,
    // GET
    getServiceImages: (id) => apiUrl + "services/images/" + id,
    // GET
    getServicePrices: (id) => apiUrl + "services/prices/" + id,
    // GET
    news: apiUrl + 'news/',
    // GET
    post: apiUrl + 'news/post/',
    // GET
    getOnlyPostWithId: (id) => 'post/' + id,
    // GET
    getOnlyPostImagesWithId: (id) => `post/${id}/images`,
    // POST
    orders: apiUrl + "orders/",
    // POST
    question: apiUrl + "question/",
    // POST
    serviceOrder: apiUrl + "services/order/"
}