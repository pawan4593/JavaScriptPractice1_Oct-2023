alert("Enter a value of a") ;

//prompt returns value entered as string
//"798" is a default value
let a = prompt("Enter a's value here : " , "798") ;
a = Number.parseInt(a) ;
alert("The type of value you have entered is " + typeof a) ;

let c = confirm("Confirm to write on document") ;
console.log(c) ;
if(c){
    document.write("This is something written because you said 'Ok' on confirm")
}else{
    document.write("The worst she can say is 'no'") ;
}