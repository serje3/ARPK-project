import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { ErrorBound } from "./components/ErrorBound";
import { InvisibleSmartCaptcha } from "@yandex/smart-captcha";
import { settings } from "../../../../settings";
import { PrivacyFormInput } from "../../../privacy/PrivacyFormInput";


const QuestionForm = ({ children, action }) => {

    const [visible, setVisible] = useState(false)
    const [form, setForm] = useState(null)
    const [token, setToken] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (form !== null && token.length !== 0) {
            if (form.get('smart-token').length === 0) {
                form.set('smart-token', token)
            }
            dispatch(action(form))
        }
    }, [form, token])

    const formOnSubmit = (event) => {
        event.preventDefault()
        setForm(new FormData(event.target))
        setVisible(true)
    }
    const hideShield = document.querySelectorAll('.SmartCaptcha-Shield').length >= 1

    return (
        <form id="ask-question" className="form-question-content grid"
              onSubmit={formOnSubmit}>
            {children}
            <InvisibleSmartCaptcha
                sitekey={settings.yandexSmartCaptchaToken}
                onSuccess={setToken}
                onChallengeHidden={() => setVisible(false)}
                visible={visible}
                // другого выхода нет....
                hideShield={hideShield}
            />
        </form>
    )
}

QuestionForm.Title = (props) => (<h2 className="form-question-title flex">{props.children}</h2>)
QuestionForm.Email = ({ label }) => (
    <div id="form-question-email-div" className="flex">
        <label htmlFor="form-question-email">{label}</label>
        <input id="form-question-email" type="email" required name="email"/>
    </div>
)
QuestionForm.Name = ({ label }) => (
    <div id="form-question-name-div" className="flex">
        <label htmlFor="form-question-name">{label}</label>
        <input id="form-question-name" required name="name"/>
    </div>
)
QuestionForm.QuestionTextArea = ({ label }) => (
    <div id="form-question-textarea-div" className="flex">
        <label htmlFor="form-question-textarea">{label}</label>
        <textarea id="form-question-textarea" required maxLength={500} name="content"/>
    </div>
)


QuestionForm.ButtonSubmit = () => (
    <button type="submit">Отправить</button>
)

QuestionForm.ErrorBound = ErrorBound

QuestionForm.PrivacyAgreement = PrivacyFormInput


export { QuestionForm }