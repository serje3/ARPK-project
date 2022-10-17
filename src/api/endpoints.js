const hostUrl = "http://localhost:8000/api/";

export const endpoints = {
    // GET
    products: hostUrl + "products/",
    // GET
    getProductOne: (id) => hostUrl + "products/" + id,
    // GET
    category: hostUrl + "category/",
    // GET
    getSubCategory: (id) => hostUrl + "category/" + id,
    // POST
    orders: hostUrl + "orders/"
}