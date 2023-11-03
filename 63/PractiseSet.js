//Q2 : Write the same program from previous question and use async / await syntax
/*
const loadScript =async (src)=>{
    return new Promise((resolve , reject) =>{
        let script = document.createElement('script') ;
        script.src = src ;
        script.onload = ()=>{
            resolve(src + "Done Success") ;
        }
        document.head.append(script) ;
    });
}
const someFunc = async ()=>{
    console.log(new Date().getMilliseconds());
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log(new Date().getMilliseconds());
    console.log(a) ;
}

someFunc() ;
*/

//------------------------------------------------------------------------------------------------------


//Q1 : Write a program to load a javaScript file in a browser using Promises . Use .then() to dispaly an alert when the load is complete 

/*
const loadScript = async (src)=>{
    return new Promise((resolve , reject) =>{
        let script = document.createElement('script') ;
        script.src = src ;
        script.onload = ()=>{
            resolve(src+ " " + "Done Success") ;
        }
        document.head.append(script) ;
    });
}
 let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js") ;
 a.then((value)=>{
    console.log(value);
 })
*/

//------------------------------------------------------------------------------------------------------


//Q3 :Create a promise which rejects after 3 seconds . Use an asunc/await to get its value . Use a try-catch to handle its error

/*
let p = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            reject(new Error("This is not acceptable .")) ;
        } , 3000) ;
    }) ;
}

let a = async ()=>{
    try{
        let c = await p() ;
        console.log(c) ;
    }catch(error){
        console.log("The error is handled");
    }
}

a() ;
*/

//------------------------------------------------------------------------------------------------------



//Q4 : Write a progrma using Promise.all() inside an async/await to await 3 promises . Compare its result with the case where we await these promises one by one

let p1 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(20);
        } , 2000)
    }) ;
}
let p2 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(10);
        } , 1000)
    }) ;
}
let p3 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(30);
        } , 3000)
    }) ;
}

const run = async ()=>{
    console.time(run) ;
    // let a1 =await p1() ;
    //     // console.log(a1) ;
    // let a2 =await p2() ;
    //     // console.log(a2) ;
    // let a3 =await p3() ;
    //     // console.log(a3) ;
    
    let a1 =await p1() ;
        // console.log(a1) ;
    let a2 =await p2() ;
        // console.log(a2) ;
    let a3 =await p3() ;
        // console.log(a3) ;

    let a1a2a3 = await Promise.all([a1, a2, a3]) ;
    console.log(a1,a2,a3);

    console.log(a1 , a2 , a3) ;
    console.timeEnd(run) ;
}

run() ;
//------------------------------------------------------------------------------------------------------