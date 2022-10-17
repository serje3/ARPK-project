import { ItemSort } from "./ItemSort";


export const Sort = () => {
    const sorts = ['По типу', 'По цене']
    return (
        <div className="manipulation_products">
            <div className="head_manipulation flex">Сортировка</div>
            <div className="manipulations_manipulation grid">
                {sorts.map((value, index)=>(
                    <ItemSort key={index}>{value}</ItemSort>
                ))}
            </div>
        </div>
    )
}