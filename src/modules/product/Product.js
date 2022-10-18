import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../redux/actions";
import { Breadcrumb } from "../common";
import ellipseImg from "../../assets/img/svg/ellipse.svg";
import { useProductBreadcrumb } from "./components/hooks/useProductBreadcrumb";
import { BuyModal } from "./components/BuyModal";


export const Product = () => {
    let { id } = useParams()
    const dispatch = useDispatch()
    const product_data = useSelector(state => state.api.currentProduct)
    const [buyModalIsOpen, setBuyModalIsOpen] = useState(false);

    if (product_data.id !== parseInt(id))
        dispatch(fetchOneProduct(id))

    if (product_data.id === -1)
        return null

    return (
        <div className="product_page">
            <Breadcrumb usePageManager={useProductBreadcrumb}/>
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
                        <div className="coast">{product_data.price}</div>
                        <div className="counter">{product_data.count}</div>
                    </div>
                    <button className="buy-btn" onClick={() => setBuyModalIsOpen(true)}>Купить</button>
                </div>

            </div>
            <BuyModal modalIsOpen={buyModalIsOpen} setIsOpen={setBuyModalIsOpen} product={product_data}/>
        </div>
    )
}