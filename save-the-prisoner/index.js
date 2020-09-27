function saveThePrisoner(n, m, s) {
    let ret = ((m % n) + (s-1)) % n;
    if (ret <= 0) {
        ret = n + ret
    }
    return ret
}

const result = saveThePrisoner(5, 2, 1);
console.log(result); // 2
