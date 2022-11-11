import { SAVE_SORT } from "./types";
import { GroupSort } from "../modules/catalog/components/sort/sort_classes/Sort";


const initialState = {
    [GroupSort.NAME]: {
        1: false,
        2: false
    },
    [GroupSort.COAST] : {
        1: false,
        2: false
    },
}

export const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SORT:
            console.log("SAVE_SORT:",action.payload)
            const data = Object.fromEntries(action.payload.data)
            return { ...state, [action.payload.type]: data }
        default:
            return state
    }
}