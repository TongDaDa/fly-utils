
/**
 * 
 * @param {String} url
 * 
 * @return {Object} { params{}, protocol:String  }
 * 
 * parseUrl(locations.href);
 * 
 * ==> {params : {espv: "2", ie: "UTF-8"}, protocol:'https' } 
 */

const parseUrl = (url)=>{

    if(typeof url !== "string"){ console.error("function parseUrl param is must string ")};

    let params = {};

    const httpFaildLastIndex = url.search(/:\/\//),
          paramStartIndex = url.substring(url.search(/(\?\S+)=+/)+1);
          
    const protocolName = url.substring(0,httpFaildLastIndex);

    const paramChunk = paramStartIndex.split("&");

    paramChunk.forEach((i,k)=>{

        const index = i.indexOf("=");

        params[i.substring(0,index)] = i.substring(index+1);
    
    });

    return { params, protocol:protocolName, }
};

export default parseUrl;