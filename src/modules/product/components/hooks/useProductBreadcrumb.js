import { useProductPagePath } from "./useProductPagePath";


const pagePath = [
    {
        className: "accent",
        page: "Главная",
        link: "/"
    },
    {
        className: "accent",
        page: "Каталог",
        link: "/catalog"
    },
]

export const useProductBreadcrumb = () => {
    return useProductPagePath(pagePath)
}