
const setProperty = (value) => {
    return value + "1";
}

const bothWayBind = (sourceObj,listenFuns) => {
    for (let key in sourceObj) {
        if (!sourceObj.hasOwnProperty(key)) continue;
        Object.defineProperties(sourceObj,key,{
            set:setProperty
        })
    }
}

export default bothWayBind
