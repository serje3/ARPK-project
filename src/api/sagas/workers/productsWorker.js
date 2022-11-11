import axios from "axios";
import { endpoints } from "api/endpoints";
import { call, put } from "redux-saga/effects";
import { FETCH_ONE_PRODUCT, FETCH_PRODUCTS } from "redux/types";


function* productsWorker() {
    try {
        const response = yield call(fetch)
        console.log('Получены товары')
        yield put({ type: FETCH_PRODUCTS, payload: response.data })
    } catch (e) {
        console.error(e)
    }
}

function* productOneWorker({ payload: id }) {
    try{
        const response = yield call(fetchOne, id)
        yield put({ type: FETCH_ONE_PRODUCT, payload: response.data })
    } catch (e) {
        console.error(e)
    }
}

const fetch = () => {
    console.log('вызов продуктов')
    return axios.get(endpoints.products)
}

const fetchOne = (id) => {
    return axios.get(endpoints.getProductOne(id))
}

export { productsWorker, productOneWorker }