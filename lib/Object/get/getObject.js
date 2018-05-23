
/**
 *
 * @param {Object} obj
 * @example
 * getObject({n:[{a:'fly'}]},"n.1.a")
 * @param {Array | string} path
 * @return undefined || {*}
 */

export default function(obj,path){
    path = Array.isArray(path) ? path : path.split(".");
    const length = path.length;
    let num = 0;
    while(num < length){
        const key = path[num++];
        if( obj[key] === undefined ){ return void 0; } else{
            obj = obj[key];
            if(num === length)  return obj;
        }
    }
};
