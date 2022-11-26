import { call, put } from "redux-saga/effects";
import { FETCH_ONE_SERVICE, FETCH_PRODUCTS, FETCH_SERVICES } from "../../../redux/types";
import axios from "axios";
import { endpoints } from "../../endpoints";


export function* serviceWorker() {
    try {
        const response = yield call(fetch)
        yield put({ type: FETCH_SERVICES, payload: response.data })
    } catch (e) {
        console.error(e)
    }
}

export function* serviceOneWorker({ payload: id }) {
    try {
        const response = yield call(fetchOne, [id])
        const images = yield call(fetchImages, [id])
        const prices = yield call(fetchPrices, [id])
        yield put({ type: FETCH_ONE_SERVICE, payload: {...response.data, images: images.data, prices: prices.data} })
    } catch (e) {
        console.error(e)
    }
}


const fetch = () => {
    console.log('вызов услуг')
    return axios.get(endpoints.services)
}

const fetchOne = (id) => {
    return axios.get(endpoints.getService(id))
}
const fetchImages = (id) => {
    return axios.get(endpoints.getServiceImages(id))
}
const fetchPrices = (id) => {
    return axios.get(endpoints.getServicePrices(id))
}