import { Link } from "react-router-dom";
import { settings } from "../../../../../settings";


export const Post = ({ header, content, date, id, children, showLink = true }) => {
    console.log('render')
    return (
        <div className="post_news flex">
            <h3>{header}</h3>
            {children}
            <p>{content.slice(0, 350)}</p>
            <sub>Дата публикации: {date}</sub>
            {showLink ? <Link to={settings.routes.getPostRoute(id)}>Подробнее</Link> : null}
        </div>
    )
}