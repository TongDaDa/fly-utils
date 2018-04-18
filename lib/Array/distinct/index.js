/**
 * @note
 * @param arr
 * @return {Array}
 */

export default distinct = (arr) => {
    return Object.values(
        arr.reduce((obj, next) => {
            let key = JSON.stringify(next);
            return (obj[key] = next), obj;
        }, {})
    )
}


