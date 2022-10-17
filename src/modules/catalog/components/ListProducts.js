import forsunkaImg from "assets/img/forsunka.jpg";
import { ItemProduct } from "./ItemProduct";
import { useFilterProducts } from "./hooks/useFilterProducts";


const test_data = {
    photo: forsunkaImg,
    title: "Форсунка MERCEDES 0445116055",
    description: "Форсунка BOSCH 0445116055 LAND ROVER LR031849 LR056367 PEUGEOT CITROEN 9678068280 FORD CG9Q9F593AA (№№ A6MWHFZ, A6MEHFV, A6MWHL1, S6MWHFV)",
    coast: 17356,
    available: true
}



export const ListProducts = ({ list = [test_data, test_data] }) => {

    const products = useFilterProducts(list);

    return (
        <div className="products_products grid">
            {
                products.map((item, index) => (
                    <ItemProduct
                        key={index}
                        id={item.id}
                        photo={item.photo}
                        title={item.name}
                        description={item.description}
                        coast={item.price}
                        available={item.available}
                    />
                ))
            }
        </div>
    )
}