async function Newfunc() {
    let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // reject('reject')
        resolve('54362')
    }, 3000);
    
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // reject('reject')
        resolve('984567')
    }, 5000);})
    console.log("data fetching...")
    let a =await p
    console.log("data fetched 'p'...")
    console.log("data fetching p2...")
    let b =await p2
    console.log("data fetched p2...")
    return [a,b]
}
let a= Newfunc()
a.then((v)=>{
    console.log(v);
    
})