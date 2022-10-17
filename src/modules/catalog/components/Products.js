import { Filter } from "./filter/Filter";
import { Sort } from "./sort/Sort";
import { ListProducts } from "./ListProducts";


const Products = ({ children }) => (
    <div className="products_catalog grid">
        {children}
    </div>
)

Products.Filter = Filter;
Products.Sort = Sort;
Products.List = ListProducts;

export { Products }