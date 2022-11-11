import { Filter, Group } from "./Filter";


export class BrendFilter extends Filter{
    constructor(args) {
        super(args, Group.BREND);
    }

    filterFunc(list, args) {
        const _args = Object.entries(this.args)
        if (_args.every(value => !value[1]))
            return list
        return list.filter(value => {
            let show = false
            for (let arrayKeyValueBool of _args) {
                if (arrayKeyValueBool[0] === value.subcategory.name && arrayKeyValueBool[1]) {
                    show = true
                    break
                }
            }
            return show
        })
    }
}