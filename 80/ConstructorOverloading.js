class Employee{
    constructor(name){
        console.log("Employee's ctor") ;
        this.name = name ;
    }
    login(){
        console.log(`Employee logged in`);
    }
    logout(){
        console.log(`Employee logged out`);
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{
    //Following is hidden ctor that javascript engine inserts incase the ctor in derived class is not written
    // constructor(...args){
    //     super(...args) ;
    // }

    constructor(name){
        super() ; //Ok
        console.log("Programmer's ctor") ;
        // super() ; //Ok
        this.name = name ;
        // super() ; //Not Ok
    }

    requestCoffee(coffee){
        console.log(`Programmer has requested ${coffee} coffees`);
    }
    requestLeaves(leaves){
        console.log(`Programmer...`);
        super.requestLeaves(leaves) ;
        console.log("One extra leave is granted");
        // console.log(`Programmer has requested ${leaves+1} leaves(One extra)`);
    }
}

let e = new Employee() ;
e.login() ;
e.requestLeaves(5) ;
let p = new Programmer() ;
p.login() ;
p.requestLeaves(5) ;


