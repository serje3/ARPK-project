const GroupSort = {
    NAME: 'name',
    COAST: 'coast',
    NONE: 'none'
}

class Sort {
    constructor(args, group) {
        this.group = group
        this.args = args
    }

// сделать её protected
    sortFunc(list, args) {
        throw Error("Not implemented")
    }

    sort(list) {
        const _args = Object.entries(this.args)
        if (_args.length === 0) {
            return list
        }
        return this.sortFunc(list, this.args)
    }
}

class NoSort extends Sort {
    constructor() {
        super({}, GroupSort.NONE);
    }

    sort(list) {
        return list;
    }
}

export { GroupSort, Sort, NoSort }