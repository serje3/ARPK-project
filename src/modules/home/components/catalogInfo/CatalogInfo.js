import { InfoBlock, InfoBlockText } from "./components/InfoBlock";
import { ImageCatalogInfo } from "./components/ImageCatalogInfo";

const CatalogInfo = (props) => (
    <div className="main-panel-home grid">
        {props.children}
    </div>
)


CatalogInfo.Info = InfoBlock
CatalogInfo.Info.H1 = InfoBlockText.H1
CatalogInfo.Info.P = InfoBlockText.P
CatalogInfo.Info.Button = InfoBlockText.Button;
CatalogInfo.Image = ImageCatalogInfo;

export { CatalogInfo }