import React, { useEffect, useState } from "react"
import Modal from 'react-modal';
import xImg from 'assets/img/svg/x.svg'
import Input from "react-phone-number-input/input";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../redux/actions";
import { Navigate } from "react-router";
import { useQuery } from "../../../hooks/useQuery";
import { PrivacyFormInput } from "../../privacy/PrivacyFormInput";


Modal.setAppElement(document.getElementById('root'));

const modal_styles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#D9D9D9",
        borderRadius: 6,
        padding: 0,
        border: 0,
        maxWidth: 474
    },
}

const orderJsonKeys = {
    product: 'product',
    name: 'name_client',
    phoneNumber: 'phone_number',
    email: 'email'
}


export const BuyModalForm = ({ modalIsOpen, setIsOpen, product, token, setVisible, setToken }) => {
    const dispatch = useDispatch()
    const order = useSelector(state => state.api.order)
    const [form, setForm] = useState(null)
    const isOrderFetched = order.status !== -1
    const isOrderError = order.status !== 201 && isOrderFetched

    const query = useQuery()

    function closeModal() {
        query.set('order', 'false')
        setIsOpen(false)
    }

    function onSubmit(event) {
        event.preventDefault()
        const form = new FormData(event.target)
        setForm(form)
        setVisible(true)
    }

    useEffect(() => {
        if (form && token.length !== 0){
                form.set('smart-token', token)
                dispatch(createOrder(form))
                setForm(null)
                setVisible(false)
                setToken("")
        }
    }, [dispatch, form, token])

    useEffect(() => {
        if (query.get('order') === 'true') {
            setIsOpen(true)
        }
        //
        // eslint-disable-next-line
    }, [query])

    return (

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modal_styles}
        >
            <div className="header_buymodal flex">
                <div className="text_header">Заказ</div>
                <img src={xImg} alt="close modal" onClick={closeModal}/>
            </div>
            <div className="content_buymodal grid">
                <div className="product">
                    <div className="head_product">Товар</div>
                    <div className="item_product grid">
                        <div className="photo_item" style={{ backgroundImage: "url(" + product.photo + ")" }}/>
                        <div className="title_item">{product.name}</div>
                        <div className="coast_item">Цена: {product.price} ₽</div>
                        <div className="counter_item">Кол-во: 1</div>
                    </div>
                </div>
                <form method="POST" onSubmit={onSubmit}>
                    <div className="head_form">Ваши данные</div>
                    <div className="head_description_form">Нам нужно связаться с вами, для подтверждения заказа и
                        сообщении о статусе
                    </div>
                    <div className="inputs_form grid">

                        <input
                            type="hidden"
                            hidden
                            value={product.id}
                            name={orderJsonKeys.product}/>

                        <div className="item_input">
                            <div className="head_item">Имя</div>

                            <input
                                type="text"
                                placeholder="Иван"
                                required={true}
                                name={orderJsonKeys.name}/>

                        </div>
                        <div className="item_input">
                            <div className="head_item">Номер телефона</div>
                            {/*input phone number component*/}

                            <Input
                                onChange={() => null}
                                name={orderJsonKeys.phoneNumber}
                                placeholder={'+7 900 000 00 00'}
                                required/>

                        </div>
                        <div className="item_input">
                            <div className="head_item">Электронная почта</div>

                            <input type="email"
                                   placeholder="ivanov@gmail.com"
                                   name={orderJsonKeys.email}
                                   required={true}/>

                        </div>
                        <div className="btn_submit">
                            <button type="submit" disabled={order.fetching}>Заказать</button>
                        </div>
                        <PrivacyFormInput/>
                    </div>
                    {isOrderError ?
                        <div className="error">
                            Ошибка
                            {Object.entries(order.message).map(([_, value]) => {
                                return <p className="item_error">{value}</p>
                            })}
                        </div>
                        : isOrderFetched ? <Navigate to={"/order/success"}/> : null
                    }
                </form>
            </div>
        </Modal>
    )
}