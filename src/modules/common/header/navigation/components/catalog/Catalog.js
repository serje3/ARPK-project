import catalogImg from "../../../../../../assets/img/svg/catalog.svg";
import { Overlay } from "./Overlay";
import { Modal } from "./Modal";


function handleClickOpenOverlay() {
    // handleOpenOverlay()
}


const Catalog = ({ children }) => {
    // <480px width: only img[alt="catalog"] will visible
    // <480px width: showOverlay work
    // const { handleOpenOverlay, handleCloseOverlay } = useOverlay();
    return (
        <div className="catalog-header flex">
            <img src={catalogImg} alt="catalog" onClick={handleClickOpenOverlay()}/>
            <div className="text_catalog">Каталог</div>
            {children}
        </div>
    )
}

Catalog.Overlay = Overlay;
Catalog.Modal = Modal;

export { Catalog }