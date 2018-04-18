import getObject from "./getObject";

/**
 * 
 * @param {Object} obj
 * @param {Array || string} structure 
 * @param {*} def 
 * @return {*} || def
 * 
 * const o = {li: [{ l:{ c:12 } }] };
 * 
 * get(o,'li[0].l.c','default');
 * // => 12
 * 
 * get(o,['li','0','l','c']);
 * // => 12
 * 
 * get(o,'li.u,'default');
 * //=> 'default'
 */

let get = function (obj,path,def) {
    const result = obj == null ? undefined : getObject(obj,path);
    return result === undefined ? def : result;
};

export default get;