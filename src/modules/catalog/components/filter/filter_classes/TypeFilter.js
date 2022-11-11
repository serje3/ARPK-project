import { Filter, Group } from "./Filter";


export class TypeFilter extends Filter {
    constructor(args) {
        super(args, Group.TYPE)
    }

    // list - array of object, args - array of key-value
    filterFunc(list, args) {
        const _args = Object.entries(this.args)
        if (_args.every(value => !value[1]))
            return list
        return list.filter(value => {
            let show = false
            for (let arrayKeyValueBool of _args) {
                if (parseInt(arrayKeyValueBool[0]) === value.subcategory.category && arrayKeyValueBool[1]) {
                    show = true
                    break
                }
            }
            return show
        })
    }
}