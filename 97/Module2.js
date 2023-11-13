// const hello = require("./Module1") ;
// console.log(hello()) ;
// hello();

// hello.printHello() ;
// hello.aPrintHello("John Doe") ;
// hello.aPrintHello("Jane Doe") ;



// const {printHello , aPrintHello} = require("./Module1") ;
// printHello() ;
// aPrintHello("Jun Jeong") ;
// aPrintHello("Sue Park") ;

                //{Destructuring}
import pawan , { printHello , aPrintHello } from "./Module1.js";
printHello() ;
aPrintHello("Jun Jeong") ;
aPrintHello("Sue Park") ;
pawan() ;

