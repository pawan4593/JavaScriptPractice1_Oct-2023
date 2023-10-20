//InsertAdjucentHTML
//InsertAdjucentText
//InsertAdjucentElement

//beforebegin , afterbegin , beforeend , afterend 

let first = document.getElementById("first") ;

first.insertAdjacentHTML('beforebegin' , '<div class="test">before - begin</div>') ;
first.insertAdjacentHTML('beforeend' , '<div class="test">before - end</div>') ;
first.insertAdjacentHTML('afterbegin' , '<div class="test">after - begin</div>') ;
first.insertAdjacentHTML('afterend' , '<div class="test">after - end</div>') ;

first.remove() ; // Remove the element
