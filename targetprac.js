
function tarNum(n) {
    let tarArr = [1, 2, 3, 4, 5, 6];
    let newArr = [];
    for (i = 0; i <= tarArr.length - 1; i++) {
        if (tarArr[i] !== n) {
            newArr.push(tarArr[i]);
        }
    }
    if (newArr.length !== 0) {
        for (i = 0; i <= newArr.length - 1; i++) {
            for (j = i + 1; j <= tarArr.length - 1; j++) {
                if (i + j == n) {
                    return i + ", " + j;
                }

            }
        }
    }
    else {
        for (i = 0; i <= tarArr.length - 1; i++) {
            for (j = i + 1; j <= tarArr.length - 1; j++) {
                if (i + j == n) {
                    return i + ", " + j;
                }

            }
        }
    }



}
console.log(tarNum(8));  