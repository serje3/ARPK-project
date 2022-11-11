import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveSearched } from "../../../redux/actions";
import { SearchGroup } from "./SearchGroup";
import { settings } from "../../../settings";


export const useDefaultDoAfterSearch = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (newList) => {
        if (newList.length === 1){
            navigate('/product/'+newList[0].id)
        }
        else if (newList.length !== 0) {
            dispatch(saveSearched(SearchGroup.PRODUCTS, newList))
            console.log('dispatched search')
            navigate(settings.routes.SearchedProducts)
        }
    }
}