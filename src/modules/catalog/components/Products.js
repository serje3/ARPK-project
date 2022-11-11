import { FilterComponent } from "./filter/FilterComponent";
import { SortComponent } from "./sort/SortComponent";
import { ListProducts } from "./ListProducts";


const Products = ({ children }) => (
    <div className="products_catalog grid">
        {children}
    </div>
)

Products.Filter = FilterComponent;
Products.Sort = SortComponent;
Products.List = ListProducts;

export { Products }