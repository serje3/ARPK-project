import { useSelector } from "react-redux";
import { NameSort } from "../sort_classes";
import { GroupSort, NoSort } from "../sort_classes/Sort";
import { CoastSort } from "../sort_classes/CoastSort";

const defaultActiveCheck = (sortArg) => {
    const argEntries = Object.entries(sortArg)
    console.log(argEntries)
    return !argEntries.every(value => !value[1])
}

const getActiveSorting = (sortArgs) => {
    const active = []
    for (let sort_name of Object.keys(sortArgs)){
        switch (sort_name){
            case GroupSort.NAME:
                if (defaultActiveCheck(sortArgs[GroupSort.NAME]))
                    active.push(GroupSort.NAME)
                break
            case GroupSort.COAST:
                if (defaultActiveCheck(sortArgs[GroupSort.COAST]))
                    active.push(GroupSort.COAST)
                break
            default:
                break
        }
    }

    return active
}

export const useSortProducts = (list) => {
    const sortArgs = useSelector(state => state.sort)
    const active = getActiveSorting(sortArgs)
    console.log(active)
    const sorts = [
        active.includes(GroupSort.NAME)? new NameSort(sortArgs[GroupSort.NAME]): new NoSort(),
        active.includes(GroupSort.COAST)? new CoastSort(sortArgs[GroupSort.COAST]): new NoSort()
    ]
    return [sorts, list, active]
}