function appendAndDelete(s, t, k) {
    let counter = -1, equalRadical = true;

    while (s && t && equalRadical && counter < s.length && counter < t.length) {
        counter += 1;
        if (s[counter] !== t[counter]) {
            equalRadical = false;
        }
    }

    let operations = Math.max(s.length - counter, 0) + Math.max(t.length - counter, 0);
    
    counter -= 1;
    while (operations < k ) {
        console.log(k, operations, counter);
        if (counter >= 0 && s[counter]) {
            operations += 2;
        } else {
            operations += 1;
        }

        counter -= 1;
    }

    return operations > k ? 'No' : 'Yes';
}

const result = appendAndDelete('hackerhappy', 'hackerrank', 9);
console.log(result); // Yes


