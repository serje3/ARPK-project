// need for TypeFilter and BrendFilter. Filters with checkboxes
export const formOnReset = (event, setFilterArgs) => {
    setFilterArgs([])
    // array of event.target.children, without <button>. We need only inputs.
    // Then we set "checked" value of input, to false.
    // Because only native reset do not reset inputs to default
    Array.from(event.target.children)
        .filter(element => element.nodeName !== "BUTTON")
        .map(element => element.firstElementChild)
        .forEach(input => input.checked=false)
}