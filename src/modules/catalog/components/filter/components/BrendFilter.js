import { ItemFilter } from "../ItemFilter";
import { useEffect, useState } from "react";
import { DropDown } from "../../../../common/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { saveFilter } from "../../../../../redux/actions";
import { Group } from "../filter_classes";
import { formOnReset } from "./utils";


const formOnChange = (event, setFilterArgs, filterArgs) => {
    console.log('hello')
    setFilterArgs(() => {
        // event.target is only one option target, id - first symbol of id element
        const value = event.target.id.split('-')[0]
        const args = filterArgs.filter(value => value[0] !== value)
        return [
            ...args,
            [value, event.target.checked]
        ]
    })
}

const getBrends = (products) => {
    const brends = new Set()
    products.forEach(product => brends.add(product.subcategory.name))
    return Array.from(brends)
}

export const BrendFilter = () => {
    const [isDropDownShown, setDropDownShow] = useState(false)
    const brends = getBrends(useSelector(state => state.api.products))
    const [filterArgs, setFilterArgs] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(saveFilter(Group.BREND, filterArgs))
    }, [dispatch, filterArgs])

    return (
        <ItemFilter onClick={() => setDropDownShow(true)}>
            По бренду
            <DropDown
                isOpen={isDropDownShown}
                onRequestClose={() => setDropDownShow(false)}
            >
                <form
                    className="form-checkboxes"
                    onReset={(event) => formOnReset(event, setFilterArgs)}
                    onChange={(event) => formOnChange(event, setFilterArgs, filterArgs)}
                >
                    {brends.map((value, index) => (
                        <div key={index} style={{
                            whiteSpace: "nowrap"
                        }}>
                            {/* INPUT MUST TO BE FIRST */}
                            <input id={value + "-choice"} name="brend" type="checkbox"/>
                            <label htmlFor={value + '-choice'}>{value}</label>
                        </div>
                    ))}
                    <button type="reset">Сбросить</button>
                </form>
            </DropDown>
        </ItemFilter>
    )
}