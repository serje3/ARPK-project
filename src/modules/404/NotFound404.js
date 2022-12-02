import { useLocation, useNavigate } from "react-router-dom";


export const NotFound404 = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className="success_page flex">
            <div className="head_success">404 Страница "{location.pathname}" не найдена</div>
            <button onClick={() => {
                navigate("/")
            }}>Вернуться на главную
            </button>
        </div>
    )
}