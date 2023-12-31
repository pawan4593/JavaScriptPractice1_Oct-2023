let p1 = new Promise((resolve , reject)=>{
    setTimeout( ()=>{
        resolve("Value 1") ;
    } , 2000)
}) ;
let p2 = new Promise((resolve , reject)=>{
    setTimeout( ()=>{
        // resolve("Value 2") ;
        reject(new Error("Error 2")) 
    } , 1000)
}) ;

let p3 = new Promise((resolve , reject)=>{
    setTimeout( ()=>{
        resolve("Value 3")
    } , 3000)
}) ;

/*
p1.then((value) =>{
    console.log(value)
}) ;

p2.then((value) =>{
    console.log(value)
}) ;

p3.then((value) =>{
    console.log(value)
}) ;
*/


//Question : Above promises are finishing with diffrent times . We know those times and hence we also
//know when their ' then() s ' are going to finish . But in the real world , sometimes I would not know the
//times . If I start executing these all promises I know they all would start executing simulteneously .
//Now I also have a code which I want to execute only when all the promises are executed . 
//In another words , I want a piece of code to execute only after all the promises are executed .
//How do I do that ?
//Answer : we use Promise APIs

//Promise.all will work Only when all the promises are resolved
//Note : Promise.all() - Waits for all promises to resolve and returns the array of their results . If any one fails , it becomes the error and all other results are ignored .
let promise_all = Promise.all([p1 , p2 , p3]) ; 
promise_all.then((value)=>{
    console.log(value) ;
}) ;

//What if I want API that work even after after 'reject'
//Note : Promise.allSettled() - Waits for all the promises to settle and returns their results as an array of objects with status and value .
let promise_all_settled = Promise.allSettled([p1 , p2 , p3]) ;
promise_all_settled.then(value=>{
    console.log(value) ;
}) ;

//What if I want only one that is executed (resolved/rejected) first .
//Note : Promise.race() - Waits for the first promise to settle and its result/error becomes the outcome
//If promise is rejected , then error occurs
let promise_race = Promise.race([ p1 , p2 , p3 ]) ;
promise_race.then(value =>{
    console.log(value) ;
})

//Similar to race except only for resolved .
//What if I want only that promise which is resolved first .
//Note - Waits for the fist promise to fulfill( and not rejected ) and its result becomes the outcome . Throws Aggregated Error if all teh promises are rejected .
let promise_any = Promise.any([p1 , p2 , p3]) ;
promise_any.then(value =>{
    console.log(value) ;
}) ;

//
//Note - Makes a resolved promise with the given value .
// let promise_resolve = Promise.resolve([p1 , p2 , p3]) ;
let promise_resolve = Promise.resolve(6) ;
promise_resolve.then(value=>{
    console.log(value) ;
}) ;


//Note - Makes a rejected promise with the given error .
// let promise_error = Promise.error([p1 , p2 , p3]) ;
let promise_error = Promise.error(new Error("new error at promise 'promise_error'")) ;
promise_error.then(value=>{
    console.log(value) ;
}) ;


