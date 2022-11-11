import searchImg from "../../../../../assets/img/svg/search.svg"
import { useSearchOnSubmit } from "../../../../../hooks/useSearch";
import { useDefaultDoAfterSearch } from "../../../utils/useDefaultDoAfterSearch";



export const Search = () => {
    const searchOnSubmit = useSearchOnSubmit(useDefaultDoAfterSearch())

    return (
        <form className="search-header grid" onSubmit={searchOnSubmit}>
            <img src={searchImg} width={15} height={15} alt="catalog search"/>
            <input type="text" placeholder="Поиск" />
            <input type="submit" hidden />
        </form>
    )
}