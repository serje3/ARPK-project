import { GroupSort } from "./Sort";
import { UpDownSort } from "./UpDownSort";


export class NameSort extends UpDownSort {
    constructor(args) {
        super(args, GroupSort.NAME)
    }

    formatValue(value) {
        return value.name.toLowerCase()
    }
}