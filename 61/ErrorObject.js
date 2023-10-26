//What is error object
//Throwing Custom error
//error.name , error.message and error.stack

// try {
//     // console.log(pawan);
//     // throw new ReferenceError("No such variable exist damn");
//     throw new Error("Throwing new error...");
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }


try {
    let age = prompt("Enter a number : ") ;
    age = Number.parseInt(age) ;
    if(age > 250)
        throw new ReferenceError("Age is too high")
    console.log("Age : " + age ) ;
} catch (error) {
    console.log(error) ;
}