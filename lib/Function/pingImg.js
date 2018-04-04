
export default url => {
    const Img = new Image();
     return new Promise((reslove,reject)=>{
         Img.onload = ()=>{ reslove("success"); };
         Img.onerror = ()=>{ reject("error"); };
         setTimeout(()=>{reject("timeout")},2000);
         Img.src = url;
     });
}