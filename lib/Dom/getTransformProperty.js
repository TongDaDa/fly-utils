/**
 *
 * @param transformStr
 * @return {{}}
 */
const getTransformProperty = (transformStr) => {
    let head = transformStr.slice(0, transformStr.indexOf('('))
    transformStr = transformStr.slice(transformStr.indexOf('(') + 1, -1)
    let arr = transformStr.split(',')
    let obj = {}
    if (head.indexOf('3d') === -1 && head !== 'matrix') {
        obj[head] = transformStr
        return obj
    }
    head = head.substring(0, head.indexOf('3d'))
    arr.forEach((i, k) => {
        const ks = k === 0 ? 'X' : k === 1 ? 'Y' : '3d'
        obj[`${head}${ks}`] = i
    })
    return obj
}