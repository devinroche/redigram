export const differenceOfArrs = (arr1, arr2) => {
    return arr1.filter(el => arr2.indexOf(el) === -1)
}