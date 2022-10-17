import { useCategoriesPagePath } from "./useCategoriesPagePath";


const pagePath = [
    {
        className: "accent",
        page: "Главная",
        link: "/"
    },
    {
        className: "default",
        page: "Каталог",
    },
]

export function useCatalogBreadcrumb() {
    const path = useCategoriesPagePath(pagePath)
    if (path.length > 2) {
        path[1].className = "accent"
        path[1].link = "/catalog"
    } else{
        path[1].className = "default"
        path[1].link = 0
    }
    return path
}
