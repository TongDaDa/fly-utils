/**
 * @note
 * @example
 *      platenArray([1,2,[1,2,[1,2],3,4,5,6]], 2) ==> [ 1, 2, 1, 2, 1, 2, 3, 4, 5, 6 ]
 *      platenArray([1,2,[1,2,[1,2],3,4,5,6]], 1) ==> [ 1, 2, 1, 2, [1, 2], 3, 4, 5, 6 ]
 *      platenArray([[{},{},[{},[{name:'liutong'}]]]], 3) ==> [ {}, {}, {}, { name: 'liutong' } ]
 * @param array
 * @param depth extract depth ,
 * @return {Array}
 */
const platenArray = (array, depth) => {
    let arr = [];
    let obj = {};

    if (!Array.isArray(array) || typeof depth !== 'number') { throw Error('platenArray error: params is Type Error') }

    /**
     * @note  Return whether conform to the depth of the depth of judgment
     * @param topKey{String} Object of key, storage an index of Array queue
     * @return {boolean}
     */
    const isMatch = (topKey) =>  obj[topKey] < depth ? true : false

    /**
     * @type process function
     * @note function recurrence for loop extract in accordance with the rules
     * @param array
     * @param topKey
     * @constructor
     */
    const Recurrence = (array, topKey='') => {
        for (let i = 0; i < array.length; i++) {
            const isArray = Array.isArray(array[i]);
            let isInit = false;
            if (isArray && obj[topKey] == null) {  // init
                topKey = i+'';
                isInit = true;
                obj[topKey] = 0;
            }
            if (isArray && isMatch(topKey)) {
                const topValue = obj[topKey]
                try { delete obj[topKey] } catch (err) {  }
                if (!isInit) topKey += i
                obj[topKey] = topValue + 1
                Recurrence(array[i],topKey)
            } else {
                arr.push(array[i])
            }
        }
    }

    Recurrence(array)
    obj = null;
    return arr
}

let testArray = [[{},{},[{},[{name:'liutong'}]]]]

console.log(platenArray(testArray,3));