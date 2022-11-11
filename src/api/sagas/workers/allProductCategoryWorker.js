import { categoryWorker } from "./categoryWorker";
import { productsWorker } from "./productsWorker";
import { all } from 'redux-saga/effects';

export function* allProductCategoryWorker(){
    yield all([categoryWorker(), productsWorker()])
}