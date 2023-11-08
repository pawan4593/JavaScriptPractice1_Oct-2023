// Q1 : Create a JavaScript class to create a complex numbers a constructor to set the real and complex part
class Complex{
    constructor(real , imag){
        this.real = real ;
        this.imag = imag ;
    }
    
    // Q2 : Write a method to add two complex numbers in above class
    static add(arr){
        arr[0] = Number.parseInt(arr[0]) + Number.parseInt(arr[2]) ;
        arr[1] = Number.parseInt(arr[1]) + Number.parseInt(arr[3]) ;
        return arr ;
    }
    //-------------------------------------------------------------------------------------------------------
}
//-------------------------------------------------------------------------------------------------------
let r1 = prompt("Enter real of first number")
let i1 = prompt("Enter imaginary of first number")
let r2 = prompt("Enter real of second number")
let i2 = prompt("Enter imaginary of second number")
const arr = [] ;
arr.push(r1) ;  arr.push(i1) ;  arr.push(r2) ;  arr.push(i2) ;
let sum = Complex.add(arr) ;
console.log(`Sum of two numbers is : ${sum[0]} + ${sum[1]}i`)
