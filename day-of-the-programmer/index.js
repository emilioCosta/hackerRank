const CALENDAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const PROGRAMMER_DAY = 256;

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }

    if (year > 1918 && (year % 400 !== 0 && year % 100 === 0)) {
        return false;
    }

    return true;
}

function dayOfProgrammer(year) {
    let sum = 0, programmerMonth = 0;
    CALENDAR.every((month, index) => {
        sum += index === 1 ? (year === 1918 ?  (month - 13) : (isLeapYear(year) ? month + 1 : month)) : month;
        if (sum + CALENDAR[index] >= PROGRAMMER_DAY) {
            programmerMonth = index + 2;
            return false;
        }

        return true;
    });

    return `${Math.abs(PROGRAMMER_DAY - sum)}.${programmerMonth < 10 ? '0' : ''}${programmerMonth}.${year}`;
}

const date = dayOfProgrammer(2020);
console.log(date); // 12.09.2020
