import { PrivacyLink } from "../privacy/PrivacyLink";
import { Helmet } from "react-helmet-async";
import { meta, settings } from "../../settings";

const _meta = meta.getAbout()

export const About = () => {
    return (
        <>
            <Helmet>
                <title>{_meta.title}</title>
                <meta name="description" content={_meta.description}/>
                <link rel="canonical" href={settings.routes.About}/>
            </Helmet>
            <div className="about-content page">
                <h1 className="h3">Информация о компании</h1>
                <div className="about-info page-content page_content_flex">
                    <h2 className="h4">ООО "Арк Партс" (Dieseldom)</h2>
                    <PrivacyLink/>
                </div>
            </div>
        </>
    )
}