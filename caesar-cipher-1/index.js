function caesarCipher(s, k) {
    let newText = '';
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);

        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
            if (char <= 90) {
                newText += String.fromCharCode(65 + ((char - 65 + k) % 26));
            } else {
                newText += String.fromCharCode(97 + ((char - 97 + k) % 26));
            }
        } else {
            newText += String.fromCharCode(char);
        }
    }

    return newText;
}

const result = caesarCipher('middle-Outz', 2);
console.log(result); // okffng-Qwvb
