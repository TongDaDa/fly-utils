require("babel-core/register",{

});

const get = require('../../Object/get');


export default from '../../Number/isNumber'

/**
 * @param arr {Array} required
 * @param getProperty{Array | PropertyAccessChar} no-required
 * @return {*}
 */
const soonSort = (arr,getProperty) => {

    if (!Array.isArray(arr)) throw Error('soon Sort params of one is not Array')

    const getPropertyFun = (obj) => {
        if (typeof getProperty === 'function') {
            return getProperty(obj);
        }
        if (typeof getProperty === 'string') {
            const getedValue = get(obj, getProperty, null);
            if (getedValue == null) { throw Error('getProperty error is not found') }
            return getedValue;
        }
    }

    let v = getProperty ? getPropertyFun(arr[0]) : arr[0];

    // 处理第二个参数
    const mid = [v]
    let left = [],right = [];
    if (arr.length <= 1) return arr.slice(0);
    for (let i = 1; i < arr.length; i++) {
        const val = getProperty ? getPropertyFun(arr[i]) : arr[i]
        if (val > mid[0]) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return soonSort(left).concat(mid.concat(soonSort(right)))
}

console.log(soonSort([{n:1},{n:3},{n:2}]),'n');