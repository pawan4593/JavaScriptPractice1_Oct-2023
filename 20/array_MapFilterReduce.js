//Map Filter and Reduce

let arr = [45 ,34 , 89 , 45,67,234,57,45,89,67,90] ;


//map functions creates a new array by performing some operations
//hence we use map when we want to create new array else use forEach
//forEach also takes the 3 argumentsS
let a = arr.map((value , index , arr)=>{
    console.log(value , index , arr )
    return value * value ;
});

// console.log(a) ;

let b = arr.filter((value)=>{
    return value > 50 ;
}) ;

// console.log(b) ;

//Reduce - reduce an array to a single value

let c = arr.reduce(( n1 , n2)=>{
    return n1 + n2 ;
}) ;

console.log(c) ;

