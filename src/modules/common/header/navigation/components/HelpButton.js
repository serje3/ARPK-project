import { useNavigate } from "react-router-dom";
import { settings } from "../../../../../settings";
import { wait } from "@testing-library/user-event/dist/utils";


export const HelpButton = () => {
    const navigate = useNavigate()
    const handleHelpButton = (event) => {
        navigate(settings.routes.Home)
        wait(10).then(()=>document.querySelector(settings.questionFormSelectorId).scrollIntoView({behavior: "smooth"}))
    }

    return (
        <div className="question-header">
            <button onClick={handleHelpButton}>
                Задать вопрос
            </button>
        </div>
    )
}