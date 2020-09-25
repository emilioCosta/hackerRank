function bonAppetit(bill, k, b) {
    let realSum = 0;
    bill.forEach((item, index) => {
        realSum += index === k ? 0 : item;
    });

    return Math.abs(realSum / 2 - b) === 0 ? 'Bon Appetit' : Math.abs(realSum / 2 - b);
}

const result = bonAppetit([3, 10, 2, 9], 1, 12);
console.log(result); // 5
