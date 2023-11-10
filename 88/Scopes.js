//Local , Global and Function

let a = 10 ;
var b = 20 ;
{
    let d = 50 ;
    let a = 5 ;
    var c = 30 ;
    console.log(a , b , c , d) ;
}

console.log( "=>: " + a , b , c );
// console.log(d); //Error

function blah(){
    let x = 100 ;
    console.log("x : " + x ) ;
}
// console.log(x) ; //Error
blah() ;
