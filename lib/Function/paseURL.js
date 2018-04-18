
/**
 * 
 * @param {String} url
 * 
 * @return {Object} { params{}, protocol:Number  }
 * 
 * parseUrl(locations.href);
 * 
 * ==> {params : {espv: "2", ie: "UTF-8"}, protocol:'https' } 
 */

const parseUrl = (url)=>{

    if(typeof url !== "string"){ console.error("function parseUrl param is must string ")};

    let params = {}, host = "";

    const httpFaildLastIndex = url.search(/:\/\//),
          paramStartIndex = url.search(/\?[^\?/S]+={1}/);

    /** 协议 */
    const protocolName = url.substring(0,httpFaildLastIndex);  

    /** 参数 */
    let paramsStr = "" , paramsChunk;

    if(paramStartIndex !== -1){

        paramsChunk = url.substr(paramStartIndex+1).split("&");

        paramsStr = url.substr(paramStartIndex+1);

        for(let i = 0; i<paramsChunk.length; ++i){
            const field = paramsChunk[i].split("=");
            params[field[0]] = field[1];
        }
    }

    /** host */
    host = url.substring(httpFaildLastIndex+3,(paramStartIndex == -1 ? url.length : paramStartIndex))

    return { params, protocol:protocolName,host}
};

export default parseUrl;