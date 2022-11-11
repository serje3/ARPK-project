import { Helmet } from "react-helmet-async";
import { meta, settings } from "../../settings";

const _meta = meta.getPrivacy()

export const Privacy = () => {
    return (
        <>
            <Helmet>
                <title>{_meta.title}</title>
                <meta name="description" content={_meta.description}/>
                <link rel="canonical" href={settings.routes.Privacy}/>
            </Helmet>
            <div className="page">
                <h1 className="h4">Политика конфиденциальности</h1>
                <div className="page-content">

                </div>
            </div>
        </>
    )
}