import { useQuery } from "../../../../hooks/useQuery";
import { isNumberQueryParamExist } from "../../../../hooks/utils/isNumberQueryParamExist";


export const useFilterProducts = (list) => {
    const query = useQuery();
    let products = list;
    const categoryId = parseInt(query.get('category-id'));
    const subcategoryId = parseInt(query.get('subcategory-id'));

    if (isNumberQueryParamExist(categoryId)){
        products = products.filter(value => value.subcategory.category === categoryId)
    }
    if (isNumberQueryParamExist(subcategoryId)) {
        products = products.filter(value => value.subcategory.id === subcategoryId)
    }

    return products
}