function marsExploration(s) {
    let counter = 0;
    for (let i = 0; i < s.length; i+=3) {

        counter += s[i] === 'S' ? 0 : 1;
        counter += s[i + 1] === 'O' ? 0 : 1;
        counter += s[i + 2] === 'S' ? 0 : 1;
    }

    return counter;
}

const result = marsExploration('SOSDOSSLS');
console.log(result); // 2
