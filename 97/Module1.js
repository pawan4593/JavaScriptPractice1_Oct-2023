// const printHello = ()=>{
//     console.log("Hello World")
// }

// const aPrintHello = (name)=>{
//     console.log(`Hello ${name}`);
// }

// //Common Js modules
// module.exports = {printHello , aPrintHello} ; //Same as below
// // module.exports = {printHello:printHello , aPrintHello:aPrintHello} ;



//ES6 Modules
export const printHello = ()=>{
    console.log("Hello World")
}

export const aPrintHello = (name)=>{
    console.log(`Hello ${name}`);
}

const pawan = ()=>{
    console.log("I am Pawan");
}

export default pawan ;