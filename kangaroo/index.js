function kangaroo(x1, v1, x2, v2) {
    return (x1 - x2) % (v2 - v1) === 0 && (x1 - x2) / (v2 - v1) > 0 ? 'YES' : 'NO';
}
const result = kangaroo(0, 3, 4, 2);
console.log(result); // YES
