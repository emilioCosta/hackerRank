function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i+j];
        }

        if (sum === d) {
            count += 1;
        }
    }

    return count;
}

const result = birthday([1, 2, 1, 3, 2], 3, 2);
console.log(result); // 2
