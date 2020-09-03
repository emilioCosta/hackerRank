function counterGame(n) {
    let who = n <= 1;
    while (n > 1) {
        who = !who;
        const k = Math.log(n) / Math.log(2);
        if (Number.isInteger(k)) {
            n /= 2;
        } else {
            n -= Math.pow(2, Math.floor(k));
        }
    }

    return who ? 'Louise' : 'Richard';
}

var result = counterGame(1533726144);
console.log(result); // Louise
