import catalogImg from "../../../../../../assets/img/svg/catalog.svg";
import { Overlay } from "./Overlay/Overlay";
import { Modal } from "./Modal";
import React from "react";
import { useMedia } from "../../../../../../hooks/useMedia";
import { useOverlay } from "./Overlay/hooks/useOverlay";
import { useRef } from "react";


function useMediaMaxWidth480() {
    return useMedia(["(max-width:480px)",], [true,], false)
}



const Catalog = (props) => {
    // <480px width: only img[alt="catalog"] will visible
    // <480px width: showOverlay work
    const overlayRef = useRef()
    const {handleOpenOverlay, handleCloseOverlay} = useOverlay(overlayRef)
    const canBeOverlayShowed = useMediaMaxWidth480()
    return (
        <div className="catalog-header flex">
            <img src={catalogImg} alt="catalog search" width={13} height={14} onClick={()=>canBeOverlayShowed?handleOpenOverlay():null}/>
            <div className="text_catalog">Каталог</div>
            <Overlay ref={overlayRef} categories={props.categories} handleClose={handleCloseOverlay}/>
            <Modal categories={props.categories}/>
        </div>
    )
}


export { Catalog }