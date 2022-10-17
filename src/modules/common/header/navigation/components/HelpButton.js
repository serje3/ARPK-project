const handleHelpButton = () => {

}

export const HelpButton = ({ onClick = handleHelpButton}) => {
    return (
        <div className="question-header">
            <button onClick={onClick}>
                Задать вопрос
            </button>
        </div>
    )
}