function pairs(k, arr) {
    let count = 0;
    let numbersDic = {};

    arr.forEach(item => {
        numbersDic[item] = true;
    });

    for (const [key, value] of Object.entries(numbersDic)) {
        if(numbersDic[parseInt(key) + k]){
            count += 1;
        }
    }

    return count;
}


var result = pairs(2, [1, 5, 3, 4, 2]);
console.log(result); // 3
