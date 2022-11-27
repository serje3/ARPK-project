import ellipseImg from "assets/img/svg/ellipse.svg";
import { PageLink } from "../../common";
import { useNavigate } from "react-router-dom";
import { settings } from "../../../settings";


export const ItemProduct = (props) => {
    const photoStyle = { backgroundImage: "url(" + props.photo + ")" }
    const navigate = useNavigate()
    const routeToProduct = settings.routes.getProductRoute(props.id)
    return (
        <div className="item_products grid">
            <div className="photo_item" style={photoStyle}/>
            <div className="description_item grid">
                <h2 className="head_description">{props.title}</h2>
                <p className="particle_description">{props.description}</p>
                <PageLink className="btn_description" path={routeToProduct}>Подробнее</PageLink>
            </div>
            <div className="info_item grid">
                <div className="available_info">
                    <div><img src={ellipseImg} width={props.isSearchPage?12:9} height={props.isSearchPage?12:9} alt="available icon"/>В наличии</div>
                </div>
                <p className="coast_info">Цена: <span>{props.coast} ₽</span></p>
                <p className="counter_info">На складе: <span>{props.count}</span></p>
                <button className="buy_info" onClick={()=>navigate(routeToProduct+"?order=true")}>Купить</button>
            </div>
        </div>
    )
}