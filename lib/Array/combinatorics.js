/**
 * @param
 * @param arr {Array} exam: [1,2,3]
 * @return arr {dimensionArray}
 * @xample
 * [[1,1,1],[1,1,2],[1,1,3],
 * [1,2,1],[1,2,2],[1,2,3],
 * [2,1,1],[2,1,2],[2,1,3],
 * [2,2,1],[2,2,2],[2,2,3]]
 */

const combinatorics = (sourceArr) => {
    if (!Array.isArray(sourceArr)) return;
    let arr = [];

    let l = sourceArr.length - 1
    let addIndex = 0;

    for (let i = l; i >= 0; i--) {
        let parentNumber = sourceArr[i];
        for (let j = 1; j <= parentNumber; j++) {
            let initArr = new Array(sourceArr.length).fill(1)
            initArr[i] = j;
            if (i!==l) {  //说明右侧有值
                const rightValue = sourceArr[i+1]
                for (let k = 1; k <= rightValue; k++) {
                    initArr[i+1] = k
                    arr.push(initArr)
                }
            } else {
                arr.push(initArr)
            }
        }
    }
    return arr;
}

console.log(combinatorics([1, 2, 3]));