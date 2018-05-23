
let catchArr = [];

const generateNum = ()=>{
    const random = Math.random() * Math.random();
    let arr = catchArr.map(i=>i.num)
    if (arr.every((i)=> i !== random)) {
        return random
    }
    return generateNum()
}

const Mysetinterval = (fn,date)=>{
    if (typeof fn !== 'function') throw TypeError ('fn is not a function')

    let catchObj = {
        timer: null,
        stopTimer: false,
        num: generateNum()
    }

    const interval = (date)=>{
        if (catchObj.stopTimer) { return; }
        catchObj.timer = setTimeout(()=>{
            fn();
            interval(date)
        }, date);
    }
    interval(date)
    catchArr.push(catchObj)
    return catchObj.num
}

const MyclearInterval = (num)=>{
    catchArr.forEach((i)=>{
        if (i.num === num) {
            i.timer = null;
            i.stopTimer = true;
        }
    })
}