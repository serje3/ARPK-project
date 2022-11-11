import { Group } from "../modules/catalog/components/filter/filter_classes";
import { SAVE_FILTER } from "./types";


const initialState = {
    [Group.TYPE]: [],
    [Group.COAST] : {
        min: -Infinity,
        max: Infinity
    },
    [Group.BREND]: []
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_FILTER:
            console.log(action.payload)
            const data = Object.fromEntries(action.payload.data)
            return { ...state, [action.payload.type]: data }
        default:
            return state
    }
}