//Promise is just like the promise in the real world

// Promise is the solution to callback hell i.e. pyramid of doom
// Promise is promise of code execution . 
// The code either executes or fails in both the cases the , the subscriber will be notified .

//Promise has two properties(which are not accessible using .operator , we will get undefined) - State and Result
//State : Initially pending , they changes either to 'fulfilled' when resolve is called or 'rejected' when reject is called .
//Result : Initially undefined , then changes to '*value*' if resolved or 'error' when rejected .

let promise = new Promise( (resolve , reject)=>{
    console.log('I am alert in promise ') ;
    resolve(56) ;

} ) ;


console.log('Code 1') ;

setTimeout(()=>{
    console.log('Code 2')
} , 2000) ;

console.log("Code 3") ;

console.log(promise) ;


