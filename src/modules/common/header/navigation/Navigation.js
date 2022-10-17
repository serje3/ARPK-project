import { PageLink } from "../../PageLink";
import { Catalog, Search, HelpButton } from "./components";


const Navigation = ({ children }) => {
    return children
}

Navigation.Catalog = Catalog;
Navigation.Search = Search;
Navigation.Page = PageLink;
Navigation.HelpButton = HelpButton;

export { Navigation };