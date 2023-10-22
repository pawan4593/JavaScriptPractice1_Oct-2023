// Add Event Listener 
// Remove Event Listener


let x =  (e)=>{
    // let btn = e.target ;
    // let btn_id = btn.id ;
    // let btn_name = btn.textContent ;
    // let btn_class = btn.className ;
    console.log(e) ; //Eventobjct
    console.log(e.target) ;
    console.log(e.type) ;
    console.log(e.clientX) ;
    console.log(e.clientY) ;
    alert('Hello World . Alert 1') ;
}

// let y = (e)=>{
//     alert('Hello World . Alert 2') ;
// }

// let a = prompt('Enter a number : ') ;

// let b = prompt('Enter a color : ') ;


btn.addEventListener('click' , x );

// btn.addEventListener('click' , y ) ;


//RemoveEventListener only works when function object is same .
// if(a == '2'){
//     btn.removeEventListener('click' , x ) ;
// }