function utopianTree(n) {
    let value = 1, growth = 1;

    for(let i = 0; i < n; i++) {
        if (value < 1) {
            growth += 1;
        } else {
            growth *= 2;
        }

        value *= -1;
    }

    return growth;
}


const result = utopianTree(1);
console.log(result); // 2
