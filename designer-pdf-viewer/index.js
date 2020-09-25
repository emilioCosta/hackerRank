function designerPdfViewer(h, word) {
    let maxNumber = -1;

    for(let i = 0; i < word.length; i++) {
        if (maxNumber < h[word.charCodeAt(i) - 97]) {
            maxNumber = h[word.charCodeAt(i) - 97];
        }
    }

    return maxNumber * word.length;
}

const result = designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc');
console.log(result); // 9
