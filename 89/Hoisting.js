// Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution
// Variables can thus be referenced before they are declared in JavaScript

// JavaScript only hoist declarations , not initializations . THe variable will be undefined until the line where it is initialized is reached .
// With let and var hoisting is different .


// greet("Jack") ;
// function greet(name){
//     console.log("Hello " + name);
// }


// console.log(a) ; //Undefined
// var a = 10 ;


// console.log(a) ; //ReferenceError: Cannot access 'a' before initialization
// let a = 10 ;

// console.log(a) ; //ReferenceError: Cannot access 'a' before initialization
// const a = 10 ;



// greet("Jack") ; //ReferenceError: Cannot access 'greet' before initialization
// const greet = (name) =>{
//     console.log("Hello " + name);
// }


//Function expressions and classes are not hoisted .
greet()
// var greet = function(){ //TypeError: greet is not a function
// let greet = function(){ //ReferenceError: Cannot access 'greet' before initialization
const greet = function(){ //ReferenceError: Cannot access 'greet' before initialization
    console.log("Good Morning");
}

//Hoisting is (to many developers) an unknown or overlooked behaviour of JavaScript . If a developer doesn't understand hoisting . programs may contain bugs(errors) .
//To avoid bugs . always declare all variables at the beginning of every scope .
//Since this is how JavaScript interprets the code , it is always good rule .
