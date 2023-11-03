//Any function can be made async by using async keyword
//Async function always returns a promise
//Other values are wrapped in a promise automatically .
//So async ensures that a function returns a promise and wraps non promise in it .
//Ex.-
// async function pawan(){
//     return 5 ;
// }

// pawan().then((value)=>{
//     alert(5) ;
// }) ;

async function pawan(){
    let MumbaiTemp = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('27 C')
        } , 6000) ;
    })

    let PuneTemp = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('26 C')
        } , 2000) ;
    })
    
    // MumbaiTemp.then((alert)) ;
    // PuneTemp.then((alert)) ;

    let MT = await MumbaiTemp ; //await tell not to move to next line till the promise is executed
    let PT = await PuneTemp ;   //So this line wont execute for 6 seconds i.e. tll MumbaiTemp is executed(resolved/rejected) .
    return [MT , PT] ;

}



let patil = ()=>{
    console.log('Executing in parallel')
}

console.log("Temp report") ;


let arr = pawan() ;
let brr = patil() ;
console.log(arr) ;

arr.then(value=>{
    console.log(value) ;
})


//Note - use await for that promise for which we want to await
//If we want to wait for the async function , then enclose that function into another async function and the await for it
