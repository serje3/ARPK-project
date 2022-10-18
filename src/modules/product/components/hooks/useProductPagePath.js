import React from "react";
import { useSelector } from "react-redux";


export const useProductPagePath = (pagePath) => {
    const api = useSelector(state => ({
        currentProduct: state.api.currentProduct,
        categories: state.api.categories
    }))
    const path = pagePath.filter(value => value.id === undefined)

    if (api.currentProduct.id !== -1 && api.categories.length !== 0) {
        const category = api.categories.find(value => value.id === api.currentProduct.subcategory.category)
        let urlLink = "/catalog"
        if (category.name !== undefined) {
            urlLink = "/catalog?category-id=" + category.id
            path.push({
                className: "accent",
                page: category.name,
                link: urlLink,
                id: category.id
            })
            const subcategory = api.currentProduct.subcategory
            urlLink += "&subcategory-id="+subcategory.id
                path.push({
                    className: "accent",
                    page: subcategory.name,
                    link: urlLink,
                    id: subcategory.id
                })
        }



        path.push({
            className: "default",
            page: api.currentProduct.name,
            id: api.currentProduct.id || -1
        })

    }

    return React.useMemo(() => path, [path])
}