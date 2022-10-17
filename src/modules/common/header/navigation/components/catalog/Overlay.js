export const Overlay = () => {
    return (
        <div id="overlay">
            <div className="header_overlay flex">
                <img src="img/svg/arrow-left.svg" alt=""/>
                <div className="p">Вернуться назад</div>
            </div>
            <div className="navigation_overlay grid">
                <label className="search_overlay grid">
                    <img src="img/svg/search.svg" alt="catalog"/>
                    <input type="text" placeholder="Поиск"/>
                </label>
                <details className="catalog_overlay">
                    <summary className="head_catalog_overlay page_overlay">Каталог</summary>
                    <div className="item_catalog_overlay grid">Дизельные форсунки <div className="pointer"/>
                    </div>
                    <div className="item_catalog_overlay grid">Топливные элементы <div className="pointer"/>
                    </div>
                    <div className="item_catalog_overlay grid">Бензиновые форсунки <div className="pointer"/>
                    </div>
                    <div className="item_catalog_overlay grid">ТНВД <div className="pointer"/></div>
                    <div className="item_catalog_overlay grid">Дизельные форсунки 2 <div className="pointer"/>
                    </div>
                </details>
                <div className="home_overlay page_overlay">Главная</div>
                <div className="contacts_overlay page_overlay">Контакты</div>
                <div className="about_overlay page_overlay">Главная</div>
                <button className="btn_overlay">Задать вопрос</button>
            </div>
        </div>
    )
}