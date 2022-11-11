import { DropDown } from "../../../../common/DropDown";
import { useEffect, useState } from "react";
import { ItemSort } from "../ItemSort";
import { useDispatch } from "react-redux";
import { saveSort } from "../../../../../redux/actions";
import { GroupSort } from "../sort_classes/Sort";
import { formOnChange, initialSortArgs } from "./utils";
import { formOnReset } from "./utils";





export const CoastSort = () => {
    const [isDropDownShown, setDropDownShow] = useState(false)
    const [sortArgs, setSortArgs] = useState(initialSortArgs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(saveSort(GroupSort.COAST, sortArgs))
    }, [dispatch, sortArgs])
    return (
        <>
            <ItemSort onClick={() => setDropDownShow(true)}>
                По цене
                <DropDown
                    isOpen={isDropDownShown}
                    onRequestClose={() => setDropDownShow(false)}
                >
                    <form
                        style={{
                            gap: 5
                        }}
                        className="grid"
                        onChange={event => formOnChange(event,setSortArgs, sortArgs)}
                        onReset={event => formOnReset(event,setSortArgs)}
                    >
                        <select defaultValue="help">
                            <option value="help" disabled hidden>Не выбрано</option>
                            <option value="1">По убыванию</option>
                            <option value="2">По нарастанию</option>
                        </select>
                        <button type="reset">Сбросить</button>
                    </form>
                </DropDown>
            </ItemSort>

        </>
    )
}