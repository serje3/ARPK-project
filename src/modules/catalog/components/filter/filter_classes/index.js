import { Filter, NoFilter, Group } from "./Filter";
import { TypeFilter } from "./TypeFilter";


const shouldUseFilterByUrl = (active) => {
    return !active.includes('type')
}

function applyFilters([filters, list, active], urlFilter) {
    let filteredList = list
    for (let filter of filters) {
        filteredList = filter.filter(filteredList)
    }
    if (shouldUseFilterByUrl(active)) {
        return urlFilter(filteredList)
    }
    return filteredList
}


export { applyFilters, Filter, TypeFilter, Group, NoFilter }