import search from "../../../../../../../assets/img/svg/search.svg"
import { ModalItemList } from "./ModalItemList";
import { useSearchOnSubmit } from "../../../../../../../hooks/useSearch";
import { useDefaultDoAfterSearch } from "../../../../../utils/useDefaultDoAfterSearch";


export const Modal = ({ categories }) => {
    const searchOnSubmit = useSearchOnSubmit(useDefaultDoAfterSearch())

    return (
        <div className="modal_catalog grid">
            <div className="head_modal">Товары</div>
            <label className="search_modal">
                <form className="grid" onSubmit={searchOnSubmit}>
                    <input type="text" placeholder="Поиск"/>
                    <img src={search} width={15} height={15} alt="catalog search"/>
                    <input type="submit" hidden/>
                </form>
            </label>
            <ModalItemList list={categories}/>
        </div>
    )
}