import { settings } from "../../../settings";
import { useSelector } from "react-redux";
import { SearchGroup } from "../../common/utils/SearchGroup";


const pagePath = [
    {
        className: "accent",
        page: "Главная",
        link: settings.routes.Home
    },
    {
        className: "accent",
        page: "Каталог",
        link: settings.routes.Catalog
    },
    {
        className: "default",
        page: "Найдено 0 результатов"
    }
]

export function useSearchedProductsBreadcrumb() {
    const products = useSelector(state => state.search[SearchGroup.PRODUCTS])
    pagePath[2].page = `Найдено ${products.length} результатов`
    return pagePath
}
