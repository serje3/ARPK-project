import { GroupSort } from "./Sort";
import { UpDownSort } from "./UpDownSort";


export class CoastSort extends UpDownSort {
    constructor(args) {
        super(args, GroupSort.COAST)
    }

    formatValue(value) {
        return value.price
    }
}