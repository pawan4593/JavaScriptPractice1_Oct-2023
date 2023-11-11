// VVV Important Topic of the JavaScript

//  Closure us the combination of a function together(enclosed) with reference to its surrounding state(the lexical environment) . In other words , a closure gives tou acess to an outer function's scope from an inner function .

// let message = "Good Morning Global" ;
// function hello1(){
//     let message = "Good Morning Local" ;
//         console.log("Hello1 "+ message );
//     let c = function hello2(){
//         console.log("Hello I am c " + message);
//     }
//     message = "Oopa Lumpa ... "
//     return c ;
// }
// c = hello1() ;
// c() ;


function returnFunc(){
    let a = 1 ;
    let x = () =>{
        console.log(a)
        let y = ()=>{
            console.log(a) ;
            let z = ()=>{
                console.log(a) ;
            }
            z() ;
        }
        a = 10 ;
        y() ;
    }
    return x ;
}

let rx = returnFunc() ;
rx() ;

