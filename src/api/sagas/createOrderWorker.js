import { call, put } from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";
import { endpoints } from "../endpoints";
import { CREATE_ORDER_FAILED, CREATE_ORDER_SUCCESS, FETCH_CREATE_ORDER } from "../../redux/types";


export function* createOrderWorker({ payload: form }) {

    try {
        const response = yield call(fetch, form)
        console.log(response)
        yield put({ type: FETCH_CREATE_ORDER })
        yield put({
            type: CREATE_ORDER_SUCCESS
        })
    } catch (e) {
        console.error(e)
        yield put({
            type: CREATE_ORDER_FAILED,
            payload: {
                status: e.response.status,
                message: e.response.data
            }
        })
    }
}


const fetch = (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }
    return axios.post(endpoints.orders, formData, config)
}