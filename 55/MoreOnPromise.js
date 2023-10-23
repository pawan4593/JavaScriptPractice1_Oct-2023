let p1 = new Promise((resolve , reject) =>{
    console.log("The promise(p1) is pending ... ") ;
    setTimeout(()=>{
        console.log(" Inside the console.log of Promise 'p1' ") ;
        resolve(true) ;
        // console.log(resolve(true)) ; //undefined .
        // reject(new Error('I am an error')) ;
    } , 5000 ) ;
}) ;

console.log(p1) ;

let p2 = new Promise((resolve , reject) =>{
    console.log("The promise(p2) is pending ... ") ;
    setTimeout(()=>{
        console.log(" Inside the console.log of Promise 'p2' ") ;
        // resolve(true) ;
        // console.log(resolve(true)) ; //undefined .
        reject(new Error('I am an error')) ;
    } , 5000 ) ;
}) ;

console.log(p2) ;


//If p1 completed(fullfilled - then ) , do this 
p1.then((value)=>{
    console.log(value)
}) ;

p2.then((value)=>{
    console.log(value)
}) ;


//If p2 is caused some error( rejected - catch ) , do this
p2.catch((error)=>{
    console.log('Some error occurred in p2') ;
}) ;

//We can also do this in one line with alone .then() function which takes 2 arguments - for resolve and for reject
        //if fullfilled
p2.then((value)=>{
    console.log(value) ;
    //If rejected
} , (error)=>{
    console.log(error) ;
}) ;