//Destructuring assignment is used to unpack values from an array or properties from objects into distinct variables
// let [x,y] = [7 , 30]


let arr = [3 , 5 , 8 , 4 , 9 , 0 , 1 , 2 , 7 , 6] ;
// let [a , b ] = arr ; // a = arr[0] = 3  ,  b = arr[1] = 5 .
// let [a , b , ...rest] = arr ; // a = arr[0] = 3  ,  b = arr[1] = 5 and remaining variables go in rest .
// let [a ,  ,  , ...rest] = arr ; // a = arr[0] = 3  , 5 and 8 are skipped and remaining variables go in rest
let [a ,  , c , ...rest] = arr ; // a = arr[0] = 3  , 5 is skipped , 8 is assigned to c and remaining variables go in rest

// console.log(a , c ,  rest) ;


function sum(v1 , v2 , v3 , v4){
    return v1+v2+v3+v4 ;
}

let {p ,q} = {p : 1 , q : 2};

//Spread Operator
let arr1 = [3 , 5 , 8 , 4] ;
let obj = { ...arr1 } ;
console.log(obj)

console.log(sum(...arr1)) ;

// const x = 'the' ;
// const y = 'one' ;
// const z = { x , y } ;
// console.log(z);


let obj2 ={
    name : "gogo" , 
    conmpany : "google",
    location : "LA"
} ;

console.log({...obj2 , name :"togo"});
console.log(obj2);