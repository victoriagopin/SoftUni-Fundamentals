function sortArray(arr, str) {
    arr = str == 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    return arr;
}

sortArray([14, 7, 17, 6, 8], 'desc');