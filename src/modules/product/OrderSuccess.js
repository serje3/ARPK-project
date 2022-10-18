import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RESET_ORDER_INFORMATION } from "../../redux/types";
import { useEffect } from "react";


export function OrderSuccess() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({ type: RESET_ORDER_INFORMATION })
    })
    const navigate = useNavigate()
    return (
        <div className="success_page flex">
            <div className="head_success">Спасибо! Заказ оформлен, мы вам сообщим, как он будет готов</div>
            <button onClick={() => {
                navigate("/")
                navigate(0)
            }}>Вернуться на главную
            </button>
        </div>
    )
}