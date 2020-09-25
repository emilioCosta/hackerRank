function gradingStudents(grades) {
    let newGrades = [];
    grades.forEach(grade => {
        if (grade >= 38) {
            const newGrade = Math.ceil(grade / 5) * 5;
            if ((newGrade - grade) <= 2) {
                newGrades.push(newGrade);
            } else {
                newGrades.push(grade);
            }
        } else {
            newGrades.push(grade);
        }
    });

    return newGrades;
}

const result = gradingStudents([73, 67, 38, 33]);
console.log(result); // [ 75, 67, 40, 33 ]


