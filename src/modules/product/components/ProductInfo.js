import React from "react";
import ellipseImg from "../../../assets/img/svg/ellipse.svg";


const ProductInfo = ({ product_data, setModalOpen }) => (
    <div className="product grid">
        <div className="title_description grid">
            <div className="title">{product_data.name}</div>
            <div className="description">{product_data.description + product_data.description}</div>
        </div>
        <div className="product_other grid">
            <div style={{
                backgroundImage: 'url("' + product_data.photo + '")',
            }} className="photo"/>
            <div className="info_product_other flex">
                <div className="available flex"><img src={ellipseImg} alt=""/>В наличии</div>
                <div className="coast">Цена: {product_data.price} ₽</div>
                <div className="counter">На складе: {product_data.count} штук(и)</div>
            </div>
            <button className="buy-btn" onClick={setModalOpen}>Купить</button>
        </div>

    </div>

)


ProductInfo.EmptyBound = () => <div style={{width: '100%', maxWidth: 1080}}>Подождите, страница загружается</div>

export { ProductInfo }