function highestValuePalindrome(s, n, k) {
    let stringArray = [];
    for(let i = 0; i < Math.round(n/2); i++) {
        if (i === (n - 1) - i) {
            stringArray[i] = {
                value: s[i],
                changed: false
            };
        } else if (s[i] < s[(n - 1) - i]) {
            stringArray[i] = {
                value: s[(n - 1) - i],
                changed: true
            };
            stringArray[(n - 1) - i] = {
                value: s[(n - 1) - i],
                changed: false
            };
            k -= 1;
        } else if (s[i] > s[(n - 1) - i]) {
            stringArray[i] = {
                value: s[i],
                changed: false
            };
            stringArray[(n - 1) - i] = {
                value: s[i],
                changed: true
            };
            k -= 1;
        } else {
            stringArray[i] = {
                value: s[i],
                changed: false
            };
            stringArray[(n - 1) - i] = {
                value: s[(n - 1) - i],
                changed: false
            };
        }
    }

    if (k < 0) {
        return -1;
    }

    for(let i = 0; i < n && k > 0; i++) {
        if (k > 0 && (stringArray[i].changed || stringArray[(n-1) - i].changed) && stringArray[i].value != 9) {
            stringArray[i].value = 9;
            stringArray[(n-1) - i].value = 9;
            k -= 1;
        } else if (k > 1 && stringArray[i].value != 9) {
            stringArray[i].value = 9;
            stringArray[(n-1) - i].value = 9;
            k -= 2;
        }
    }

    if (n % 2 !== 0 && k > 0) {
        stringArray[Math.floor(n/2)].value = 9;
    }

    let ret = '';

    for(let i = 0; i < n; i++) {
        ret += stringArray[i].value;
    }

    return ret;   
}

const result = highestValuePalindrome('01234', 5, 3);
console.log(result); // 93239
