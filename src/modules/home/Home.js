import { CatalogInfo, QuestionForm, Services } from "./components";
import { Helmet } from "react-helmet-async";
import { meta, settings } from "../../settings";
import { createQuestion } from "../../redux/actions";


export const Home = () => {
    const _meta = meta.getHome()
    return (<>
            <Helmet>
                <title>{_meta.title}</title>
                <meta name="description" content={_meta.description}/>
                <link rel="canonical" href={settings.routes.Home}/>
            </Helmet>
            <div className="home-content grid">
                <CatalogInfo grid>
                    <CatalogInfo.Info>
                        <CatalogInfo.Info.H1>Продажа и ремонт дизельных форсунок и ТНВД</CatalogInfo.Info.H1>
                        <CatalogInfo.Info.P>от производителя Siemens, Denso, BOSCH, Delphi по выгодным
                            ценам.</CatalogInfo.Info.P>
                        <CatalogInfo.Info.Button>Перейти в каталог</CatalogInfo.Info.Button>
                    </CatalogInfo.Info>
                    <CatalogInfo.Image/>
                </CatalogInfo>
                <Services grid>
                    <Services.Header/>
                    <Services.List/>
                </Services>
                <QuestionForm action={createQuestion}>
                    <QuestionForm.Title>Ответим на ваши вопросы</QuestionForm.Title>
                    <QuestionForm.Email label="Email"/>
                    <QuestionForm.Name label="Как к вам обращаться?"/>
                    <QuestionForm.QuestionTextArea label="Вопрос"/>
                    <QuestionForm.ButtonSubmit/>
                    <QuestionForm.ErrorBound reduxVarName={'question'}/>
                    <QuestionForm.PrivacyAgreement/>
                </QuestionForm>
            </div>
        </>
    )
}