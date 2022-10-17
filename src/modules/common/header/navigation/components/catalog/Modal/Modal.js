import search from "../../../../../../../assets/img/svg/search.svg"
import { catalogItems } from "../catalogItems";
import { ModalItemList } from "./ModalItemList";

export const Modal = ({ categories }) => {
    return (
        <div className="modal_catalog grid">
            <div className="head_modal">Товары</div>
            <label className="search_modal grid">
                <input type="text" placeholder="Поиск"/>
                <img src={search} alt="catalog"/>
            </label>
            <ModalItemList list={categories}/>
        </div>
    )
}