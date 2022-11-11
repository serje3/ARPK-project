import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setOneProduct } from "../../../../redux/actions";


export const useProductData = (id) => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.api.products)
    const product_data = products.find(value => value.id === parseInt(id))
    let isEmpty = false
    useEffect(() => {
        if (product_data) {
            dispatch(setOneProduct(product_data))
        }
    }, [dispatch, product_data])
    if (!product_data)
        isEmpty = true
    return [product_data, isEmpty]
}