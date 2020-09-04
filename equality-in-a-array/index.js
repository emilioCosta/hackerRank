function equalizeArray(arr, n) {
    let obj = {}, max = 0;

    arr.forEach(number => {
        obj[number] = obj[number] >= 0 ? obj[number] + 1 : 1;
        max = obj[number] > max ? obj[number] : max;
    });

    return n - parseInt(max);
}

const deletions = equalizeArray([1, 2, 3, 1, 2, 3, 3, 3], 8);
console.log(deletions); // 4


