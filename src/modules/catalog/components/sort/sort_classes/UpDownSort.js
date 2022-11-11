import { Sort } from "./Sort";


export class UpDownSort extends Sort{
    valueToUp(valueA, valueB) {
        if (valueA < valueB)
            return -1
        else if(valueA > valueB)
            return 1
        else
            return 0
    }


    valueToDown(valueA, valueB) {
        return this.valueToUp(valueB, valueA);
    }

    formatValue(value){

    }

    sortFunc(list, args) {
        const argsEntries = Object.entries(args)
        const argToUp = argsEntries[0]
        const argToDown = argsEntries[1]
        const newList = list.slice(0, list.length)
        newList.sort((valueA, valueB) => {
            const _valueA = this.formatValue(valueA)
            const _valueB = this.formatValue(valueB)
            if (argToUp[1]) {
                return this.valueToUp(_valueA, _valueB)
            } else if (argToDown[1]) {
                return this.valueToDown(_valueA, _valueB)
            }
            return 0
        })
        return newList
    }
}