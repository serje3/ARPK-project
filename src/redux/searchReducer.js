import {SAVE_SEARCHED} from './types'
import { SearchGroup } from "../modules/common/utils/SearchGroup";

const initialState = {
    [SearchGroup.PRODUCTS]: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case SAVE_SEARCHED:
            return { ...state, [action.payload.type]:action.payload.data}
        default:
            return state
    }
}