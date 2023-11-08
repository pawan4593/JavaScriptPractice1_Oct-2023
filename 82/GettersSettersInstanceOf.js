class LivingThings{

}

class Animal extends LivingThings{
    constructor(name){
        super() ;
        this._name = name ;
    }

    get name(){
        return this._name ;
    }

    set name(name){
        this._name = name ;
    }

    fly(){
        console.log("I believe I can fly , I believe I can touch the sky") ;
    }
}

let a = new Animal("giraffe") ;
a.fly() ;

console.log(a.name) ;
a.name = "bear"
console.log(a.name) ;


//instanceOf operator allows you to check if object belongs to mentioned particular class or not .An object also belongs to parent of the class , instanceOf operator returns true for <object> instanceOf <parent class>
//returns boolean value
let b = 34 ;
console.log(a instanceof Animal)
console.log(a instanceof LivingThings)
console.log(b instanceof Animal)
