function removeFieldObstacle(n, r_q, c_q, obstacles) {
    let toRemove = { n:  0, nl: 0, l:  0, sl: 0, s:  0, so: 0, o:  0, no: 0};
    Object.values(obstacles
        .reduce((r, v) => (r[v] = v, r), {}))
        .forEach(obstacle => {
            const rowRule = obstacle[0] < r_q ? 1 : n;
            const colRule = obstacle[1] < c_q ? 1 : n;
            
            if (obstacle[0] === r_q) {
                let value = Math.abs(obstacle[1] - colRule) + 1;

                if (colRule <= 1) {
                    toRemove.s = value > toRemove.s ? value : toRemove.s;
                } else {
                    toRemove.n = value > toRemove.n ? value : toRemove.n;
                }
            } else if (obstacle[1] === c_q) {
                let value = Math.abs(obstacle[0] - rowRule) + 1;

                if (rowRule <= 1) {
                    toRemove.l = value > toRemove.l ? value : toRemove.l;
                } else {
                    toRemove.o = value > toRemove.o ? value : toRemove.o;
                }
            } else if (Math.abs(obstacle[0] - r_q) === Math.abs(obstacle[1] - c_q)) {
                let diffRow = Math.abs(obstacle[0] - rowRule);
                let diffCol = Math.abs(obstacle[1] - colRule);
                let value = Math.min(diffCol, diffRow) + 1;

                if (rowRule <= 1) {
                    if (colRule <= 1) {
                        toRemove.sl = value > toRemove.sl ? value : toRemove.sl;
                    } else {
                        toRemove.so = value > toRemove.so ? value : toRemove.so;
                    }
                } else {
                    if (colRule <= 1) {
                        toRemove.nl = value > toRemove.nl ? value : toRemove.nl;
                    } else {
                        toRemove.no = value > toRemove.no ? value : toRemove.no;
                    }
                }
            }
    });

    return toRemove.n + toRemove.no + toRemove.o + toRemove.so + toRemove.s + toRemove.sl + toRemove.l + toRemove.nl;
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    let count = 0;


    count += Math.abs(r_q - 1) + Math.abs(r_q - n);
    count += Math.abs(c_q - 1) + Math.abs(c_q - n);
    count += Math.min(Math.abs(r_q - 1), Math.abs(c_q - 1));
    count += Math.min(Math.abs(r_q - 1), Math.abs(c_q - n));
    count += Math.min(Math.abs(r_q - n), Math.abs(c_q - 1));
    count += Math.min(Math.abs(r_q - n), Math.abs(c_q - n));

    count -= removeFieldObstacle(n, r_q, c_q, obstacles);

    return count;
}

const movements = queensAttack(5, 3, 4, 3, [[5,5],[4,2],[2,3]]);
console.log(movements); // 10


