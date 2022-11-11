import { PageLink } from "../common";
import { settings } from "../../settings";


export const PrivacyLink = () => {
    return (
        <PageLink path={settings.routes.Privacy} resetStyle={false}>Политика конфиденциальности</PageLink>
    )
}