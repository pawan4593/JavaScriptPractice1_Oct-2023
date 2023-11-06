// Javascript objects have a special property called 'property' which is either null or referencing another object . 
//Prototypal inheritance


let a = {
    name2 : "Gogo" , 
    language : "JavaScript",
    run : ()=>{
        // alert("run") ;
        console.log("run a") ;
    }
}
console.log(a);


let p = {
    run : ()=>{
        // alert("run") ;
        console.log("run p") ;
    } ,
}

p.__proto__ = {
    name : "Jackie"
}

a.__proto__ = p ;

a.run() ;//First run is searched in the a , if not present then it is searched in its __proto__ .__proto__ is used make an prototype for someone(object)

console.log(a.name) ;