function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0, orangesCount = 0;

    apples.forEach(appleDistance => {
        const applePosition = appleDistance + a;
        if (applePosition >= s && applePosition <= t) {
            applesCount += 1;
        }
    });

    oranges.forEach(orangeDistance => {
        const orangePosition = orangeDistance + b;
        if (orangePosition >= s && orangePosition <= t) {
            orangesCount += 1;
        }
    });

    console.log(`${applesCount}\n${orangesCount}`);
}

const result = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
console.log(result); // 1 \n 1
