function staircase(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += ' '.repeat(n - i - 1);
        result += '#'.repeat(i + 1);
        result += '\n';
    }

    console.log(result);
}

const result = staircase(6);
console.log(result);

//     #
//    ##
//   ###
//  ####
// #####
//######