/**
 * @note conversion template string
 * @param str innerHTML
 * @param obj template Object
 * @example
 * transformTemplate('<div> i'm name is {{name}}'\</div>',{name:'LiuTong'}) =>> i'm name is LiuTong
 * @return: {string}
 */

export default transformTemplate = (str,obj) => {
    const r = new RegExp(/{{\w+}}/,"g");
    const matchedArr = str.match(r);
    for (let i = 0; i < matchedArr.length; i++) {
        str = str.replace(matchedArr[i],(i) => {
            return obj[i.slice(2,-2)] || ''
        })
    }
    return str;
}
