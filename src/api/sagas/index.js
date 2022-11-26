import { takeLatest } from "redux-saga/effects";
import {
    INIT_RESET_SUBCATEGORIES, REQUEST_ALL_PRODUCTS_CATEGORIES,
    REQUEST_CATEGORIES,
    REQUEST_CREATE_ORDER,
    REQUEST_CREATE_QUESTION, REQUEST_CREATE_SERVICE_ORDER, REQUEST_NEWS,
    REQUEST_ONE_PRODUCT, REQUEST_ONE_SERVICE,
    REQUEST_PRODUCTS, REQUEST_SERVICES,
    REQUEST_SUBCATEGORIES
} from "redux/types";
import {
    categoryWorker,
    subcategoryResetWorker,
    productOneWorker,
    productsWorker,
    subcategoryWorker,
    createOrderWorker
} from "./workers"
import { createQuestionWorker } from "./workers/createQuestionWorker";
import { allProductCategoryWorker } from "./workers/allProductCategoryWorker";
import { createServiceOrderWorker } from "./workers/createOrderWorker";
import { serviceOneWorker, serviceWorker } from "./workers/serviceWorker";
import { newsWorker } from "./workers/newsWorker";


export function* sagaWatcher() {
    yield takeLatest(REQUEST_CATEGORIES, categoryWorker)
    yield takeLatest(REQUEST_SUBCATEGORIES, subcategoryWorker)
    yield takeLatest(REQUEST_PRODUCTS, productsWorker)
    yield takeLatest(REQUEST_ALL_PRODUCTS_CATEGORIES, allProductCategoryWorker)
    yield takeLatest(REQUEST_ONE_PRODUCT, productOneWorker)
    yield takeLatest(REQUEST_CREATE_ORDER, createOrderWorker)
    yield takeLatest(REQUEST_CREATE_QUESTION, createQuestionWorker)
    yield takeLatest(REQUEST_CREATE_SERVICE_ORDER, createServiceOrderWorker)
    yield takeLatest(INIT_RESET_SUBCATEGORIES, subcategoryResetWorker)
    yield takeLatest(REQUEST_SERVICES, serviceWorker)
    yield takeLatest(REQUEST_ONE_SERVICE, serviceOneWorker)
    yield takeLatest(REQUEST_NEWS, newsWorker)
}