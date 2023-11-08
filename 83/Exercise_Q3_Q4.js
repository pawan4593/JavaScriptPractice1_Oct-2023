// Q3 : Create a class Student from a class Human . Override a method and see changes
class Human{
    greet(){
        console.log("Human : Good Morning")
    }
}

class Student extends Human{
    greet(){
        console.log("Student : Good Morning Sir")
    }
}

let h = new Human() ;
h.greet() ;
h = new Student() ;
h.greet() ;

//-------------------------------------------------------------------------------------------------------



// Q4 : See if student is an instance of Human using instanceOf keyword
if(h instanceof Human)
    console.log("h is instance of Human");
else
    console.log("h is not instance of Human");
//-------------------------------------------------------------------------------------------------------



