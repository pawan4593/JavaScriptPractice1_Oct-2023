console.log("This is console.log()") ;

console.error("This is console.error()") ;

console.warn("This is console.warn") ;

console.info("This is console.info") ;

// console.clear() ;

console.assert( 5 > 3 ) ;

console.assert( 3 > 5 ) ;

let randomObject = {
    name : "Amitabh" ,
    profession : "Actor" ,
    height : "6\"2'",
    spouse : "Jaya" ,
    nickname : "Angry Young Man"
} ;

console.table(randomObject) ;


console.time("forLoop") ;

for(let i = 1 ; i <= 500 ; i++){
    console.log("hi") ;
}

console.timeEnd("forLoop") ;