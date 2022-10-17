import { itemsListServices } from "./itemsListServices";


export const ListServices = ({ items=itemsListServices }) => (
    <div className="list-services grid">
        { items.map((item, key)=>(
            <div key={key} className="item">
                <div className="h1-item">{item.h1}</div>
                <div className="p-item">{item.p}</div>
                <button>Подробнее</button>
            </div>
        ))}
    </div>
)