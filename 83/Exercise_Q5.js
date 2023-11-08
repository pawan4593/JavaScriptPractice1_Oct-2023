// Q5 : Use getters and setters to set and get the real and imaginary parts
/*
class Complex{
    constructor(){
        this._real = 0 ;
        this._imag = 0 ;
    }
    
    get real(){
        return this._real ;
    }
    get imag(){
        return this._imag ;
    }

    set real(real){
        this._real = Number.parseInt(real) ;
    }
    set imag(imag){
        this._imag = Number.parseInt(imag) ;
    }


    static add( num1 , num2 ){
        let num = new Complex() ;
        num.real = num1.real + num2.real ;
        num.imag = num1.imag + num2.imag ;
        return num ;
    }
    //---------------------------------------------------------------------------------------------------
}

let num1 = new Complex() ;
let num2 = new Complex() ;
num1.real = 2 ; 
num1.imag = 3 ; 
num2.real = 8 ; 
num2.imag = 9 ; 

let num = new Complex() ;
num = Complex.add(num1 , num2) ;
console.log(`Sum : ${num.real} + ${num.imag}i`) ;
console.log("Real : " + num.real) ;
console.log("Imag : " + num.imag) ;


*/


class Complex{
    constructor(real , imag){
        this._real = real ;
        this._imag = imag ;
    }
    
    get real(){
        return this._real ;
    }
    get imag(){
        return this._imag ;
    }
    
    set real(real){
        this._real = real ;
    }
    set imag(imag){
        this._imag = imag ; 
    }

    add(num){
        let r = this._real + num.real ;
        let i = this._imag + num.imag ;
        return new Complex( r , i );
    }
}

let num1 = new Complex(2 , 3) ;
let num2 = new Complex(8 , 9) ;

let num = num1.add(num2) ;
console.log(`Sum : ${num.real} + ${num.imag}i`) ;
