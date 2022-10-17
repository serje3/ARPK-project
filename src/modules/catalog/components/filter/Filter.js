import { ItemFilter } from "./ItemFilter";


export const Filter = () => {
    const filters = ['По типу', 'По цене', 'По марке', 'По бренду']
    return (
        <div className="manipulation_products">
            <div className="head_manipulation flex">Фильтр</div>
            <div className="manipulations_manipulation grid">
                {filters.map((value, index)=>(
                    <ItemFilter key={index}>{value}</ItemFilter>
                ))}
            </div>
        </div>
    )
}