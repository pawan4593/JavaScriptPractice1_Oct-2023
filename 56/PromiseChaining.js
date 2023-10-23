let p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds") ;
        resolve(34) ;
    }, 2000) ;
});


p1.then((value)=>{
    console.log(value) ; //34
    let p2 = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Promise 2 resolved after 2 seconds") ;
        } , 2000) ;
    }) ;
    return p2 ; //
}).then((value)=>{
    console.log("We are done") ;
    console.log(value) ;
    return 2 ; // 2 is Automatically converted to promise
}).then((value)=>{
    console.log(value) ;
}) ;