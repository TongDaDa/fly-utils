/**
 * function prevent shake and function current-limit
 *
 **/

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

export default funAntiShake