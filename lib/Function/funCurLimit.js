/**
 * function prevent shake and function current-limit
 *
 **/

const funAntiShake = (()=>{
    let topTime = 0;
    return (timer,execute,isRequestAnm,...rest) => {
        if (timer && typeof timer !== "number") { console.error("please input number type of timer arguments"); return; }
        const currentTime = Date.now();
        if (topTime + timer <= currentTime) {
            topTime = Date.now();
            if (!isRequestAnm) {  execute && execute.apply(this,[...rest]); return; }
            requestAnimationFrame(()=>{
                execute && execute.apply(this,[...rest]);
            })
        }
    }
})()

export default funAntiShake