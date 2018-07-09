/**
 * @note 转换成 UTF-8 编码
 * @param charStr
 * @return {Array}
 */
const encode = (charStr) => {
    const encodeStr = encodeURIComponent(charStr);
    return encodeStr.split("%").map(item=>parseInt(item,16))
}


/**
 * @note 转译 UTF-8
 * @param charList
 * @return {string}
 */
const decode = (charList) => {
    return charList.map(item=>"%" + item.toString(16)).join()
}