function sortBirds(a, b) {
    if (a.count > b.count) {
        return -1;
    } else if (a.count < b.count) {
        return 1;
    }
    
    if (a.type < b.type) {
        return -1;
    } else if (a.type > b.type) {
        return 1;
    }

    return 0;
}

function migratoryBirds(arr) {
    let birdTypes = [];
    arr.forEach(bird => {
        const birdType = birdTypes.find(birdType => birdType.type === bird);
        if(birdType) {
            birdType.count += 1;
            birdTypes[birdType.position] = birdType;
        } else {
            birdTypes.push({
                position: birdTypes.length,
                count: 1,
                type: bird
            });
        }
    });

    return birdTypes.sort((a, b) => sortBirds(a, b))[0].type;
}

const birdType = migratoryBirds([1, 4, 4, 4, 5, 3]);
console.log(birdType); // 4


