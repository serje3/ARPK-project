import { useSelector } from "react-redux";



export const useSearchOnSubmit = (doAfterSearch) => {
    const list = useSelector(state => state.api.products)

    return (event) => {
        event.preventDefault()
        //eslint-disable-next-line
        const re = RegExp("(\S+\s){0,3}\S*("+event.target[0].value+")\S*(\s\S+){0,3}", "i")
        // const re = RegExp("\b("+event.target[0].name.toLowerCase()+")\b", 'gi')
        const new_list = list.filter(value => re.test(value.name.toLowerCase()))
        console.log(re, list, 'бля', re.test("Форсунка NISSAN"), re.test("Форсунка NISSAN"), re.test("Форсунка NISSAN"));
        doAfterSearch(new_list)
    }
}