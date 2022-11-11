import { ItemProduct } from "../../catalog/components/ItemProduct";


export const ListProducts = ({ products }) => {
    return <div className="list_products grid">
        {products.map((item, index) => (
            <ItemProduct
                key={index}
                id={item.id}
                photo={item.photo}
                title={item.name}
                description={item.description}
                coast={item.price}
                available={item.available}
                isSearchPage={true}
            />))}
    </div>
}