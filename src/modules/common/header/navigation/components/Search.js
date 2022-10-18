import searchImg from "../../../../../assets/img/svg/search.svg"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../../redux/actions";
import { useNavigate } from "react-router-dom";

const handleInputSearch = (event, list, navigate) => {
    event.preventDefault()
    //eslint-disable-next-line
    const re = RegExp("(\S+\s){0,3}\S*("+event.target[0].value+")\S*(\s\S+){0,3}", "gi")
    const new_list = list.filter(value => re.test(value.name))
    if (new_list.length !== 0)
        navigate("/product/"+new_list[0].id)
}

export const Search = ({ onSubmit = handleInputSearch }) => {
    const list = useSelector(state => state.api.products)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    if (list.length === 0)
        dispatch(fetchProducts())

    return (
        <form className="search-header grid" onSubmit={(event)=>onSubmit(event, list, navigate)}>
            <img src={searchImg} alt="catalog"/>
            <input type="text" placeholder="Поиск" />
            <input type="submit" hidden />
        </form>
    )
}