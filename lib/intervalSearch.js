const intervalSearch = (()=>{
    let contextQueue = [];

    return (time,cb)=>{
        
            if(!cb || time == null) return
        
            contextQueue.push(cb);
            
            setTimeout(()=>{
        
                if(contextQueue.length > 1) {
                   return;
                };
        
                cb()
        
                contextQueue.shift();
        
            },time)
        }
        
})()
