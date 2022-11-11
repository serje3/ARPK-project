import { ItemFilter } from "../ItemFilter";
import { DropDown } from "../../../../common/DropDown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveFilter } from "../../../../../redux/actions";
import { Group } from "../filter_classes";


const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 5
}

const getMinMaxCoast = (products) => {
    const coasts = []
    products.forEach(product => coasts.push(product.price))
    return [Math.min(...coasts), Math.max(...coasts)]
}

const setFilterArgsMinMaxCoast = (target, setFilter) => {
    setFilter(state => {
        console.log(state)
        console.log(target)
        const stateObj = Object.fromEntries(state)
        if (target.id === 'coast-in')
            return Object.entries({
                min: target.value,
                max: stateObj.max
            })
        else if (target.id === 'coast-out')
            return Object.entries({
                min: stateObj.min,
                max: target.value
            })
    })
}

const formatInfinityValue = (value) => {
    const infinitySymbol = '∞'
    if (Math.abs(value) === Infinity)
        return Math.sign(value) === 1? infinitySymbol:"-" + infinitySymbol
    return value
}

export const CoastFilter = () => {
    const [min, max] = getMinMaxCoast(useSelector(state => state.api.products))
    const initialState = [['min', -Infinity], ['max', +Infinity]]
    const [filterArgs, setFilterArgs] = useState(initialState)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(filterArgs)
        dispatch(saveFilter(Group.COAST, filterArgs))
    }, [dispatch, filterArgs])

    const [isDropDownShown, setDropDownShow] = useState(false)
    return (
        <ItemFilter onClick={() => setDropDownShow(true)}>
            По цене
            <DropDown
                isOpen={isDropDownShown}
                onRequestClose={() => setDropDownShow(false)}
            >
                <form style={formStyle} onChange={(event) => setFilterArgsMinMaxCoast(event.target, setFilterArgs)}>
                    <label htmlFor="coast-in">Цена от {formatInfinityValue(filterArgs[0][1])}</label>
                    <input type="range" id="coast-in" min={min} max={max} defaultValue={0}/>
                    <label htmlFor="coast-out">Цена до {formatInfinityValue(filterArgs[1][1])}</label>
                    <input type="range" id="coast-out" min={min} max={max} defaultValue={max}/>
                    <button type="reset" onClick={()=>setFilterArgs(initialState)}>Сбросить</button>
                </form>
            </DropDown>
        </ItemFilter>
    )
}