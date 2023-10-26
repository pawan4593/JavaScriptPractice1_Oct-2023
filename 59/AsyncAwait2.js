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
    }) ;

    let PuneTemp = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('26 C')
        } , 2000) ;
    }) ;
    
    // MumbaiTemp.then((alert)) ;
    // PuneTemp.then((alert)) ;

    let MT = await MumbaiTemp ; //await tell not to move to next line till the promise is executed
    let PT = await PuneTemp ;   //So this line wont execute for 6 seconds i.e. tll MumbaiTemp is executed(resolved/rejected) .
    return [MT , PT] ;

}



let patil = async ()=>{
    console.log('Cant execute in parallel')
}

const main1 = async ()=>{

    console.log("Temp report") ;
    
    
    let arr = await pawan() ; //No more parallel execution and now patil() has to wait
    let brr = await patil() ;
    
    console.log(arr) ; //undefined
    console.log(brr) ; //undefined
    

    // Error : then is not a fucntion
    // arr.then(value=>{
    //     console.log(value) ;
    // })

    // brr.then(value=>{
    //     console.log(value) ;
    // })
}

main1() ;