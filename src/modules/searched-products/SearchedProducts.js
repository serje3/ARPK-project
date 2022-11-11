import { useSelector } from "react-redux";
import { SearchGroup } from "../common/utils/SearchGroup";
import { Breadcrumb } from "../common";
import { useSearchedProductsBreadcrumb } from "./hooks/useSearchedProductsBreadcrumb";
import { ListProducts } from "./components/ListProducts";


export const SearchedProducts = () => {
    const products = useSelector(state => state.search[SearchGroup.PRODUCTS])
    return (
        <div className="search_page grid">
            <Breadcrumb usePageManager={useSearchedProductsBreadcrumb}/>
            <h1 className="h4">Результат поиска товаров</h1>
            <ListProducts products={products}/>
        </div>
    )
}