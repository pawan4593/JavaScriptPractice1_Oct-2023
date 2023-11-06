class Animal{
    constructor(name , color){
        this.name = name ;
        this.color = color ;
    }

    run(){
       console.log(`${this.name} is running .`); 
    }

    shout(){
       console.log(`${this.name} is shouting .`); 
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name} is eating banana .`);
    }
}

let a = new Animal("Animilia" , "colorful") ;
let m = new Monkey("Chimp" , "Black") ;


a.run() ;
a.shout() ;

m.run() ;
m.shout() ;
m.eatBanana() ;