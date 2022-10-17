import React from "react"
import { useSelector } from "react-redux";
import { useQuery } from "../../../../hooks/useQuery";
import { isNumberQueryParamExist } from "../../../../hooks/utils/isNumberQueryParamExist";


export const useCategoriesPagePath = (pagePath) => {
    const query = useQuery();
    const categories = useSelector(state => state.api.categories)
    const categoryId = parseInt(query.get('category-id'));
    const path = pagePath.filter(value => value.id === undefined)

    if (categories !== undefined && isNumberQueryParamExist(categoryId)) {
        const category = categories.find(value => value.id === categoryId)
        if (category !== undefined){
            path.push({
                className: "default",
                page: category.name,
                id: category.id
            })
        }

    }
    return React.useMemo(() => path, [path])
}