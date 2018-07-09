export function splitObject (obj,list){
    const left = {};
    const right = {};
    Object.keys(obj).forEach((m)=>{
        if(list.indexOf(m) !== -1){
            left[m] = obj[m];
        }else{
            right[m] =obj[m];
        }
    });
    return [left,right];
}