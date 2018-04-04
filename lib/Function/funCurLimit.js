/**
 * function prevent shake and function current-limit
 **/

const currentLimiting = (()=>{
    const timer_queue = {};
    return (name,timer,execute) => {
        const _clearTimeout = ()=> {
            if (timer_queue[name]) {
                clearTimeout(timer_queue[name]);
                timer_queue[name] = null;
            }
        }
        _clearTimeout();
        timer_queue[name] = setTimeout(execute,timer)
    }
})()

const funAntiShake = (()=>{
    let topTime = 0;
    return (name,timer,execute,...rest) => {
        if (timer && typeof timer !== "number") { console.error("please input number type of timer arguments") }
        const currentTime = Date.now();
        if (topTime + timer <= currentTime) {
            topTime = Date.now();
            execute && execute.apply(this,[...rest]);
        }
    }
})()

export {currentLimiting,funAntiShake}