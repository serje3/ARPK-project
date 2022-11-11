const Group = {
    TYPE: "type",
    BREND: "brend",
    COAST: "coast",
    NONE: "none"
}

class Filter {
    constructor(args, group) {
        this.group = group
        this.args = args
    }

// сделать её protected
    filterFunc(list, args) {
        throw Error("Not implemented")
    }

    filter(list) {
        const _args = Object.entries(this.args)
        if (_args.length === 0) {
            return list
        }
        return this.filterFunc(list, this.args)
    }
}

class NoFilter extends Filter {
    constructor() {
        super({}, Group.NONE);
    }

    filter(list) {
        return list
    }
}


export { Filter, Group, NoFilter }