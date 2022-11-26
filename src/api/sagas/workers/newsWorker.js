import axios from "axios";
import { endpoints } from "../../endpoints";
import { call, put } from "redux-saga/effects";
import { FETCH_NEWS, FETCH_POST_IMAGES } from "../../../redux/types";


export function* newsWorker({ payload }) {
    try {
        if (payload.pathname !== undefined) {
            const response = yield call(fetchPost, [payload.pathname,])
            if (payload.fetchImages) {
                const images_response = yield call(fetchPost, [payload.pathname + '/images',])
                yield put({ type: FETCH_POST_IMAGES, payload: images_response.data })
            }
            yield put({ type: FETCH_NEWS, payload: response.data })
        }
    } catch (e) {
        console.error(e)
    }
}

const fetchPost = (pathname) => {
    return axios.get(endpoints.news + pathname)
}