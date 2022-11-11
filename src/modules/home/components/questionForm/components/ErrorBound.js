import { useSelector } from "react-redux";
import React from "react";


export const ErrorBound = (props) => {
    const question = useSelector(state => state.api[props.reduxVarName])

    const isQuestionFetched = question.status !== -1
    const isQuestionError = question.status !== 201 && isQuestionFetched

    return isQuestionError ?
        <div className="error">
            Ошибка
            {Object.entries(question.message).map(([key, value]) => {
                return <p key={key} className="item_error">{value}</p>
            })}
        </div>
        : isQuestionFetched ?
            <div className="success">Отправлено</div> : <div className="error-empty"/>
}