// Q2 : Wirte a JavaScript program to find average of a numbers in an array using spread syntax

function avg (a , b , c){
    return (a+b+c)/3 ;
}
let arr = [4 , 7 , 3] ;
let avgOfArr = avg(...arr) ;
console.log(avgOfArr) ;