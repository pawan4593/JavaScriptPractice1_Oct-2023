//mouse events
//  click , context menu , mouse over , mouse out , mouse down , mouse up , mouse move
//keyboard events
//  key down , key up ,
//form element events
//  submit , focus
//document events
//  DOMContentLoaded


let elem = document.getElementsByClassName("container")[0] ;

elem.onclick = ()=>{
    console.log("This is pawan") ;
    elem.innerText = "This is random text innerText" ;
}


//NOTE : When there is event on the inline html and also in the javascript file ,
// the javascript file is considered .