let first = document.getElementById("first") ;
let classOfFirst = first.getAttribute("class") ;
console.log("Class of Attribute : " + classOfFirst) ;

console.log(first.hasAttribute("class")) ;
console.log(first.hasAttribute("style")) ;

// first.setAttribute("hidden" , true) ;
first.setAttribute("class" , "monday cartoon-network optimus-prime") ;//This will remove the previous classes add new classes .

// first.removeAttribute("class") ; //Removes the class attributes .

console.log(first.attributes) ;


//What if I used custom attributes and tommorow if ECMA coincidently decided to have the new attribute of same name then , the existing application will create problem . So as per the guidelines given by ECMA -
// Add your custom attributes as " data-"*" " e.x. data-game="mario" , data-player="pawan" . This way it wont create a problem in the future and 
console.log(first.dataset) ;
console.log(first.dataset.game) ; 
console.log(first.dataset.player) ;
