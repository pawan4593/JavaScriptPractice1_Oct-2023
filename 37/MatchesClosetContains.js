// console.log(id1) ;//Works but not recommended
// console.log(id2) ;//Works but not recommended

let id1 = document.getElementById("id1")
console.log(id1) ;

console.log(id1.matches(".boxxy")) ; //'false' since there is no matching class boxxy
console.log(id1.matches(".box")) ; //'true' since there is matching class box


let p1 = document.getElementById("p1") ;
console.log(p1.closest("#id1")) ; //returns the closest ancestor of the element . The element is also his own ancestor

let sp2 = document.getElementById("sp2") ;
let sp1 = document.getElementById("sp1") ;
console.log(sp1.contains(p1)) ;
console.log(id1.contains(p1)) ;
console.log(id1.contains(sp1)) ;
console.log(id1.contains(sp2)) ;