import { put, call } from 'redux-saga/effects'
import { FETCH_CATEGORIES } from "redux/types";
import axios from "axios";
import { endpoints } from "api/endpoints";



export function* categoryWorker() {
    try {
        const response = yield call(fetch);
        console.log('Получены категории')
        yield put({ type: FETCH_CATEGORIES, payload: response.data })
    } catch (e) {
        console.error(e)
    }
}

const fetch = () => {
    return axios.get(endpoints.category)
}