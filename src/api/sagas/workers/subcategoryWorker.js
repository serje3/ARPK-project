import axios from "axios";
import { endpoints } from "../../endpoints";
import { call, put } from "redux-saga/effects";
import { FETCH_SUBCATEGORIES, RESET_SUBCATEGORIES } from "../../../redux/types";


function* subcategoryWorker({ payload: categoryId }) {
    const response = yield call(fetch, categoryId)
    yield put({ type: FETCH_SUBCATEGORIES, payload: response.data })
}

function* subcategoryResetWorker() {
    yield put({ type: RESET_SUBCATEGORIES })
}


const fetch = (categoryId) => {
    return axios.get(endpoints.getSubCategory(categoryId))
}

export { subcategoryWorker, subcategoryResetWorker }