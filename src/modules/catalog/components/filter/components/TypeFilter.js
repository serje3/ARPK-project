import { ItemFilter } from "../ItemFilter";
import { DropDown } from "../../../../common/DropDown";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveFilter } from "../../../../../redux/actions";
import { Group } from "../filter_classes";
import { formOnReset } from "./utils";


const formOnChange = (event, setFilterArgs, filterArgs) => {
    setFilterArgs(() => {
        // event.target is only one option target, id - first symbol of id element
        const id = parseInt(event.target.id[0])
        const args = filterArgs.filter(value => value[0] !== id)
        return [
            ...args,
            [id, event.target.checked]
        ]
    })
}


function setValuesToInputs(filterArgs, ref) {
    if (ref.current && filterArgs.length !== 0){
        const arrayInputs = Array.from(ref.current).filter((value) => value.nodeName === 'INPUT')
        console.log(filterArgs)
        arrayInputs.forEach(value => {
            const id = parseInt(value.id[0])
            const filterArg = filterArgs.find(value => value[0] === id)
            console.log(filterArg, id)
            if (filterArg)
                value.checked = filterArg[1]
        })
    }
}

export const TypeFilter = () => {
    const formRef = useRef(null)
    const categories = useSelector(state => state.api.categories)
    const [filterArgs, setFilterArgs] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(saveFilter(Group.TYPE, filterArgs))
    }, [dispatch, filterArgs])
    const [isDropDownShown, setDropDownShow] = useState(false)
    return (
        <>
            <ItemFilter onClick={() => {setDropDownShow(true)}}>
                По типу
                <DropDown
                    isOpen={isDropDownShown}
                    onRequestClose={() => setDropDownShow(false)}
                >
                    <form
                        ref={formRef}
                        className="form-checkboxes"
                        onReset={(event) => formOnReset(event, setFilterArgs)}
                        onChange={(event) => formOnChange(event, setFilterArgs, filterArgs)}
                    >
                        {categories.map((value, index) => (
                            <div key={index} style={{
                                whiteSpace: "nowrap"
                            }}>
                                {/* INPUT MUST TO BE FIRST */}
                                <input id={value.id + "-choice"} name="type" type="checkbox"/>
                                <label htmlFor={value.id + '-choice'}>{value.name}</label>
                            </div>
                        ))}
                        <button type="reset">Сбросить</button>
                    </form>
                </DropDown>
            </ItemFilter>

        </>
    )
}