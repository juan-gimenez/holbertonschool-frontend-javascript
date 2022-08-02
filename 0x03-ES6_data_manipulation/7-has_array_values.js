export default function hasValuesFromArray(set, arr) {
    return arr.every((elm) => set.has(elm));
}
