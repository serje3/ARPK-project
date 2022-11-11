import React from "react";
import { PageLink } from "../../../../../PageLink";
import searchImg from "assets/img/svg/search.svg"
import arrowLeft from "assets/img/svg/arrow-left.svg"
import { OverlayItemList } from "./OverlayItemList";
import { useSearchOnSubmit } from "../../../../../../../hooks/useSearch";
import { useDefaultDoAfterSearch } from "../../../../../utils/useDefaultDoAfterSearch";
import { useNavigate } from "react-router-dom";
import { settings } from "../../../../../../../settings";
import { wait } from "@testing-library/user-event/dist/utils";


export const Overlay = React.forwardRef((props, ref) => {

    const searchOnSubmit = useSearchOnSubmit(useDefaultDoAfterSearch())
    const navigate = useNavigate()
    const handleHelpButton = (event) => {
        navigate(settings.routes.Home)
        wait(10).then(()=>document.querySelector(settings.questionFormSelectorId).scrollIntoView({behavior: "smooth"}))
        props.handleClose()
    }

    return (
        <div id="overlay" ref={ref}>
            <div className="header_overlay flex" onClick={props.handleClose}>
                <img src={arrowLeft} width={27} height={27} alt="close overlay"/>
                <div className="p">Вернуться назад</div>
            </div>
            <div className="navigation_overlay grid">
                <form onSubmit={(event) => {
                    searchOnSubmit(event);
                    props.handleClose()
                }}>
                    <label className="search_overlay grid">
                        <img src={searchImg} width={15} height={15} alt="catalog search"/>
                        <input type="text" placeholder="Поиск"/>
                        <input type="submit" hidden/>
                    </label>
                </form>
                <details className="catalog_overlay overlay-details">
                    <summary className="head_catalog_overlay page_overlay">Каталог</summary>
                    <OverlayItemList list={props.categories} onClick={props.handleClose}/>
                </details>
                <PageLink className="home_overlay page_overlay"
                          path={"/"}
                          onClick={props.handleClose}
                >Главная</PageLink>
                <PageLink className="contacts_overlay page_overlay"
                          path={"/contacts"}
                          onClick={props.handleClose}
                >Контакты</PageLink>
                <PageLink className="about_overlay page_overlay"
                          path={"/about"}
                          onClick={props.handleClose}
                >О нас</PageLink>

                <button className="btn_overlay" onClick={handleHelpButton}>Задать вопрос</button>
            </div>
        </div>
    )
})