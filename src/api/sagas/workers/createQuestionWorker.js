import { call, put } from "redux-saga/effects";
import {
    CREATE_QUESTION_FAILED,
    CREATE_QUESTION_SUCCESS,
    FETCH_CREATE_QUESTION
} from "../../../redux/types";
import Cookies from "js-cookie";
import axios from "axios";
import { endpoints } from "../../endpoints";
import { getErrorMessage } from "./utils";


export function* createQuestionWorker({ payload: form }) {
    try {
        const response = yield call(fetch, form)
        console.log(response)
        yield put({ type: FETCH_CREATE_QUESTION })
        yield put({ type: CREATE_QUESTION_SUCCESS })
    } catch (e) {
        console.error(e)
        yield put({
            type: CREATE_QUESTION_FAILED,
            payload: {
                status: e.response.status,
                message: getErrorMessage(e)
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
    return axios.post(endpoints.question, formData, config)
}