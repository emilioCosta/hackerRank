function divideString(str, size) {
    const particles = Math.ceil(str.length / size);
    const array = new Array(particles);

    for (let i = 0, o = 0; i < particles; ++i, o += size) {
        array[i] = str.substr(o, size);
    }

    return array;
}

function encryption(s) {
    s = s.replace(' ', '');
    const L = s.length;
    const row = Math.floor(Math.sqrt(L)), col = Math.ceil(Math.sqrt(L));
    s = divideString(s, col);

    let result = "";
    for (let i = 0; i < col; i++) {
        s.forEach(word => {
            if (i < word.length) {
                result += word[i];
            }
        });

        result += " ";
    }

    return result;
}

var result = encryption("feedthedog");
console.log(result); // fto ehg ee dd
