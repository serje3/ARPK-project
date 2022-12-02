import { PageLink } from "../../../../common";
import { settings } from "../../../../../settings";
import { useSelector } from "react-redux";


export const ListServices = () =>{
    const items = useSelector(state => state.api.services) || []
    return (
        <div className="list-services grid">
            { items.map((item, key)=>(
                <div key={key} className="item">
                    <h3 className="h1-item">{item.name}</h3>
                    <p className="p-item">{item.h2}</p>
                    <PageLink className='flex' path={settings.routes.getServiceRoute(item.id)}>Подробнее</PageLink>
                </div>
            ))}
        </div>
    )
}