/**
 *
 * @param str innerHTML
 * @param obj template Object
 * @example
 * transformTemplate('<div> i'm name is {{name}}'\</div>',{name:'LiuTong'}) =>> i'm name is LiuTong
 * @return: {string}
 */
const transformTemplate = (str,obj) => {
    const r = new RegExp(/{{\w+}}/,"g");
    const matchedArr = str.match(r);
    for (let i = 0; i < matchedArr.length; i++) {
        str = str.replace(matchedArr[i],(i)=>{
            const content = i.match(/\w+/)[0]
            return obj[content] || ''
        })
    }
    return str;
}

export default transformTemplate;

export { component } from './transformTemplate'