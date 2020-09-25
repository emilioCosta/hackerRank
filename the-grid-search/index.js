function gridSearch(G, P) {
    const gr = G.length, gc = G[0].length;
    const pr = P.length, pc = P[0].length;
    let found = false;

    for(let i = 0; i < gr * gc; i++) {
        if (gc - (i % gc) < pc) {
            if (gr - Math.floor(i / gc) < pr) break;
            i += gc - (i % gc);
        }

        let newI = i, rightIncrement = gc - ((i + pc) % gc), leftIncrement = i % gc;
        found = true;
        for(let j = 0; j < pr * pc; j++, newI++) {
            if (j > 0 && j % pc === 0) {
                newI += (rightIncrement >= gc ? 0 : rightIncrement) + leftIncrement;
            }
            if (G[Math.floor(newI / gc)][newI % gc] !== P[Math.floor(j / pc)][j % pc]) {
                found = false;
                break;
            }
        }

        if (found) {
            return 'YES';
        }
    }

    return 'NO';
}
const result = gridSearch(['999999', '121211'], ['99', '11']);
console.log(result); // YES
