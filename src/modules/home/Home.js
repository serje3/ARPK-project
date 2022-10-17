import { CatalogInfo, Services } from "./components";

export const Home = () => {
    return (
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
        </div>
    )
}