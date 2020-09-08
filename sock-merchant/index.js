function sockMerchant(ar) {
    let obj = {}, pairs = 0;
    ar.forEach(sock => {
        obj[sock] = obj[sock] ? obj[sock] + 1 : 1;
        if (obj[sock] % 2 === 0) {
            pairs += 1;
        }
    });

    return pairs;
}

const pairs = sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(pairs); // 3
