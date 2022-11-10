let promise = new Promise((resolve,reject)=>{ 
    setTimeout(()=>{
        resolve("done");
    },1000)
})


console.log('PROMISE WHEN DONE')
promise.then(val=>{
    console.log(val)
})