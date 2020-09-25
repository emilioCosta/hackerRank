function kaprekarNumbers(p, q) {
    let strFinal = '';
    for (let i = p; i <= q; i++) {
        let newValue = Math.pow(i, 2);
        const right = newValue % Math.pow(10, ('' + i).length);
        const left = Math.floor(newValue / Math.pow(10, ('' + i).length));
        if (right + left === i)
            strFinal += `${i} `;
    }

    console.log(strFinal || 'INVALID RANGE');
}

const result = kaprekarNumbers(1, 100);
console.log(result); // 1 9 45 55 99
