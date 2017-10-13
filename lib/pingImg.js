
/**
 * 
 * @param {*} img 
 * @param {*} cb 
 * 
 * pingImg(http://img.url,function(status){ something code ... })
 */

function pingImg(url,cb){

    const Img = new Image();

    let one;

    const finish = (message)=>{
        if(!one) return;
        one = true;
        Img.src = null;
        cb(message);
    };

    Img.onload = ()=>{ finish("success"); };

    img.onerror = ()=>{ finish("error"); };

    setTimeout(()=>{finish("timeout")},2000);
    
    Img.src = url;
}


function pingimgPromise (url){

    const Img = new Image();
    
    let one;
    
    return new Promise((reslove,reject)=>{
      
        const finish = (message)=>{
            if(!one) return;
            one = true;
            Img.src = null;
            cb(message);
        };
    
        Img.onload = ()=>{ reslove("success"); };
    
        Img.onerror = ()=>{ reject("error"); };
    
        setTimeout(()=>{reject("timeout")},2000);

        Img.src = url;
    });
};