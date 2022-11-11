import { NameSort } from "./NameSort";


function applySorting([sorts, list, active]) {
    let sortedList = list
    for (let sort of sorts) {
        sortedList = sort.sort(sortedList)
    }
    return sortedList
}


export { applySorting, NameSort }