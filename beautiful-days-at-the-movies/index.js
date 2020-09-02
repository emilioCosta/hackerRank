function reverse(i) {
    let reversed = 0;
    while(i > 0) {
        reversed = reversed * 10 + i % 10;
        i = Math.floor(i/10);
    }
    return reversed;
}

function beautifulDays(i, j, k) {
    let beautifulDays = 0;
    while (i <= j) {
        let result = Math.abs(i - reverse(i)) % k;
        beautifulDays += result <= 0 ? 1 : 0;
        i += 1;
    }
    return beautifulDays;
}

const days = beautifulDays(20, 23, 6);
console.log(days); // 2


