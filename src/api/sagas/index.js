import { takeLatest } from "redux-saga/effects";
import {
    INIT_RESET_SUBCATEGORIES,
    REQUEST_CATEGORIES, REQUEST_ONE_PRODUCT,
    REQUEST_PRODUCTS,
    REQUEST_SUBCATEGORIES
} from "../../redux/types";
import { categoryWorker } from "./categoryWorker";
import { productOneWorker, productsWorker } from "./productsWorker";
import { subcategoryResetWorker, subcategoryWorker } from "./subcategoryWorker";


export function* sagaWatcher() {
    yield takeLatest(REQUEST_CATEGORIES, categoryWorker)
    yield takeLatest(REQUEST_SUBCATEGORIES, subcategoryWorker)
    yield takeLatest(REQUEST_PRODUCTS, productsWorker)
    yield takeLatest(REQUEST_ONE_PRODUCT, productOneWorker)

    yield takeLatest(INIT_RESET_SUBCATEGORIES, subcategoryResetWorker)
}