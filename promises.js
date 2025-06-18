let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("54")
        // reject('reject')
        resolve('resolved')
    }, 3000);
})
p.then((v)=>{
    console.log(v)
}).catch((e)=>{
    console.log(e);
    
})