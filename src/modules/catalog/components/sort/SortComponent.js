import { NameSort } from "./components/NameSort";
import { CoastSort } from "./components/CoastSort";


export const SortComponent = () => {
    return (
        <div className="manipulation_products">
            <div className="head_manipulation flex">Сортировка</div>
            <div className="manipulations_manipulation grid">
                <NameSort/>
                <CoastSort/>
            </div>
        </div>
    )
}