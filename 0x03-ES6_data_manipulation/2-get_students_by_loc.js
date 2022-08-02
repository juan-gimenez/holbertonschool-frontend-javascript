export default function getStudentsByLocation(arr, city) {
    // get arr of obj which city SF
    return arr.filter((item) => item.location === city);
}
