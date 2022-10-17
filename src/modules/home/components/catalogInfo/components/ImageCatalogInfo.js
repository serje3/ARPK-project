import engineImg from "../../../../../assets/img/engine.jpg";


export const ImageCatalogInfo = ({ src = engineImg }) => {
    const style = {
        backgroundImage: "url('" + src + "')"
    }
    return <div className="img_panel" style={style}/>
}