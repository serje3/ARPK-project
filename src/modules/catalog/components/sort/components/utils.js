const initialSortArgs = [
    [1, false], [2, false]
]

const formOnChange = (event, setSortArgs, sortArgs) => {
    const options = Array.from(event.target.children)
        .filter(value => value.disabled !== true)
    const newSortArgs = options.map(value => [parseInt(value.value), value.selected])
    const isSortArgsEqual = newSortArgs.length === sortArgs.length &&
        newSortArgs.every((value, index) => {
            return value.length === sortArgs[index].length &&
                value.every((v, j) => v === sortArgs[index][j])
        })
    if (isSortArgsEqual) {
        return 0
    }

    setSortArgs(() => {
        return newSortArgs
    })
}

const formOnReset = (event, setSortArgs) => {
    const options = Array.from(event.target.firstChild.children)
    options.forEach(option => {
        option.selected = false
    })

    setSortArgs(initialSortArgs)
}

export {initialSortArgs, formOnChange, formOnReset}