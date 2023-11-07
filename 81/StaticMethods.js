//Methods that belong to class


class Animal{
    constructor(name){
        // this.name = Animal.capitalize(name) ;    //Will work
        this.name = name ;
    }

    makeNoise(){
        // console.log(`Animal ${Animal.capitalize(this.name)} is making noise. `); //Will work
        console.log(`Animal ${this.name} is making noise. `);
    }

    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.lenght) ;
    }
}

let doggo = new Animal("bruno") ;
// let doggo = new Animal(Animal.capitalize("bruno")) ;     //Will work
doggo.makeNoise() ;
