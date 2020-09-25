function pangrams(s) {
    let object = {};
    [...s].forEach(char => {
        if (char !== ' ' && !object[char.toLowerCase()]) {
            object[char.toLowerCase()] = 2;
        }
    });

    return Object.keys(object).length === 26 ? 'pangram' : 'not pangram';
}

const result = pangrams('We promptly judged antique ivory buckles for the next prize');
console.log(result); // pangram
