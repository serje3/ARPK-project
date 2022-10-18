import ellipseImg from "assets/img/svg/ellipse.svg";
import { PageLink } from "../../common";
import { useNavigate } from "react-router-dom";


export const ItemProduct = (props) => {
    const photoStyle = { backgroundImage: "url(" + props.photo + ")" }
    const navigate = useNavigate()
    return (
        <div className="item_products grid">
            <div className="photo_item" style={photoStyle}/>
            <div className="description_item grid">
                <div className="head_description">{props.title}</div>
                <div className="particle_description">{props.description}</div>
                <PageLink className="btn_description" path={"/product/"+props.id}>Подробнее</PageLink>
            </div>
            <div className="info_item grid">
                <div className="available_info">
                    <div><img src={ellipseImg} alt=""/>В наличии</div>
                </div>
                <div className="coast_info">Цена: <span>{props.coast} ₽</span></div>
                <div className="counter_info">Количество <span>- 1 +</span></div>
                <button className="buy_info" onClick={()=>navigate("/product/"+props.id+"?order=true")}>Купить</button>
            </div>
        </div>
    )
}