/**
 *
 * @param num
 * @return {string}
 */
function splitNum(num) {

    if (!/\d+/.test(num)) throw Error('splitNum is not effective number')
    let nums = num = num.toString(),
        dotIndex = nums.indexOf('.');

    nums = nums.substring(0,dotIndex === -1 ? num.length : dotIndex)
                .split('')
                .reverse()
                .join('');

    return nums.replace(/(\d{3})/g,'$1,')
                .replace(/\,$/,'')
                .split('')
                .reverse()
                .join('') + (dotIndex>=0 ? num.slice(dotIndex) : '')
}

export default splitNum
