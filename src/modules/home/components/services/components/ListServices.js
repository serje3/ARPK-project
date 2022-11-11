import { itemsListServices } from "./itemsListServices";
import { PageLink } from "../../../../common";


export const ListServices = ({ items=itemsListServices }) => (
    <div className="list-services grid">
        { items.map((item, key)=>(
            <div key={key} className="item">
                <h3 className="h1-item">{item.h1}</h3>
                <p className="p-item">{item.p}</p>
                <PageLink className='flex' path={item.link}>Подробнее</PageLink>
            </div>
        ))}
    </div>
)