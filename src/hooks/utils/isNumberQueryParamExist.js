
export function isNumberQueryParamExist(queryParam) {
    return queryParam !== null && !isNaN(queryParam)
}