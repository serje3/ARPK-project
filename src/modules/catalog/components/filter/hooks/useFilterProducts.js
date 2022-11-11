import { useQuery } from "hooks/useQuery";
import { isNumberQueryParamExist } from "hooks/utils/isNumberQueryParamExist";
import { Group, TypeFilter } from "../filter_classes";
import { NoFilter } from "../filter_classes";
import { useSelector } from "react-redux";
import { CoastFilter } from "../filter_classes/CoastFilter";
import { BrendFilter } from "../filter_classes/BrendFilter";


function useURLFilterProducts() {
    const query = useQuery();
    return (list) => {
        let products = list;
        const categoryId = parseInt(query.get('category-id'));
        const subcategoryId = parseInt(query.get('subcategory-id'));

        if (isNumberQueryParamExist(categoryId)) {
            products = products.filter(value => value.subcategory.category === categoryId)
        }
        if (isNumberQueryParamExist(subcategoryId)) {
            products = products.filter(value => value.subcategory.id === subcategoryId)
        }
        return products
    }
}

const getActiveFilters = (filterArgs) => {
    const active = []
    for (let filter_name of Object.keys(filterArgs)){
        let argEntries;
        switch (filter_name){
            case Group.TYPE:
                argEntries = Object.entries(filterArgs.type)
                if (argEntries.length !== 0 && !argEntries.every(value => !value[1]))
                    active.push(Group.TYPE)
                break
            case Group.COAST:
                argEntries = Object.entries(filterArgs.coast)
                if (argEntries.length !== 0 && !argEntries.every(value => Math.abs(value[1]) === Infinity))
                    active.push(Group.COAST)
                break
            case Group.BREND:
                argEntries = Object.entries(filterArgs.brend)
                if (argEntries.length !== 0 && !argEntries.every(value => !value[1]))
                    active.push(Group.BREND)
                break
            default:
                break
        }
    }

    return active
}

// returns filters for applyFilters function
const useFilterProducts = (list) => {
    const filterArgs = useSelector(state => state.filter)
    const active = getActiveFilters(filterArgs)
    const filters = [
        active.includes(Group.TYPE)? new TypeFilter(filterArgs.type): new NoFilter(),
        active.includes(Group.COAST)? new CoastFilter(filterArgs.coast): new NoFilter(),
        active.includes(Group.BREND)? new BrendFilter(filterArgs.brend): new NoFilter(),
    ]
    return [filters, list, active]
}

export { useURLFilterProducts, useFilterProducts }