import { Filter, Group } from "./Filter";


export class CoastFilter extends Filter{
    constructor(args) {
        super(args, Group.COAST);
    }

    filterFunc(list, args) {
        return list.filter(value => {
            return value.price >= args.min && value.price <= args.max
        })
    }
}