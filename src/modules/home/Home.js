import { CatalogInfo, QuestionForm, Services } from "./components";
import { Helmet } from "react-helmet-async";
import { meta, settings } from "../../settings";
import { createQuestion, fetchNews, fetchServices } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { News } from "./components/news/News";


export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchServices())
        dispatch(fetchNews('?page_size=1'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <CatalogInfo.Info.H1>Продажа дизельных форсунок и ТНВД</CatalogInfo.Info.H1>
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
                <News/>
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