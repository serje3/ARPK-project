import { QuestionForm } from "../home/components";
import { createServiceOrder } from "../../redux/actions";
import { Helmet } from "react-helmet-async";


export const Service = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.meta.title}</title>
                <meta name="description" content={props.meta.description}/>
                <link rel="canonical" href={props.route}/>
            </Helmet>
            <div className="service-page flex">
                <h1 className="h3">{props.header}</h1>
                <h2 className="h4">{props.h2}</h2>
                <p className="description p"> {props.description}</p>
                <div className="service-information flex">
                {props.children}
                </div>

                <QuestionForm action={createServiceOrder} hideShield={true}>
                    <input type="hidden" hidden={true} value={props.header} name="service"/>
                    <QuestionForm.Title>Заказать услугу</QuestionForm.Title>
                    <QuestionForm.Email label={"Email"}/>
                    <QuestionForm.Name label={"Имя"}/>
                    <QuestionForm.QuestionTextArea label={"Сообщение"}/>
                    <QuestionForm.ButtonSubmit/>
                    <QuestionForm.ErrorBound reduxVarName={'service'}/>
                    <QuestionForm.PrivacyAgreement/>
                </QuestionForm>
            </div>
        </>
    )
}