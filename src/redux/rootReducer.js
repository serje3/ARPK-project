import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";
import { searchReducer } from "./searchReducer";


export const rootReducer = combineReducers({
    api: apiReducer,
    filter: filterReducer,
    sort: sortReducer,
    search: searchReducer
})