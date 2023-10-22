//Question1 : Write a program to show different alerts when different buttons are clicked .
let btn1 = document.getElementById("btn1") ;
let btn2 = document.getElementById("btn2") ;
let btn3 = document.getElementById("btn3") ;
let btn4 = document.getElementById("btn4") ;


let btn1eventFunctionPointer = (e)=>{
    alert('This is btn1 ' + e) ;
}

let btn2eventFunctionPointer = (e)=>{
    alert('This is btn2 ' + e.target) ;
}

let btn3eventFunctionPointer = (e)=>{
    alert('This is btn3 ' + e.target) ;
}

let btn4eventFunctionPointer = (e)=>{
    alert('This is btn3 ' + e.target) ;
}

btn1.addEventListener('click' , btn1eventFunctionPointer) ;
btn2.addEventListener('click' , btn2eventFunctionPointer) ;
btn3.addEventListener('click' , btn3eventFunctionPointer) ;
btn4.addEventListener('click' , btn4eventFunctionPointer) ;

//-----------------------------------------------------------------

//Question 2 : Create a website which is capable of storing bookmarks of your favourite websites using href

//-----------------------------------------------------------------

//Question 3 : Repeat question 2 using event listeners
let btnArray = document.getElementsByClassName("q3") ;
let gBtn = btnArray[0] ;
let yBtn = btnArray[1] ;
let fBtn = btnArray[2] ;

let gBtnClickEventFunctionPointer = ()=>{
    let url = 'https://www.google.co.in' ;
    let win = window.open(url , "" , "width=600 , height=600 , scrollbars=yes , resizable=yes") ;
    win.focus() ;
}
let yBtnClickEventFunctionPointer = ()=>{
    let url = 'https://in.yahoo.com' ;
    window.location = url ;
    win.focus() ;
}
let fBtnClickEventFunctionPointer = ()=>{
    let url = 'https://www.facebook.com' ;
    window.location = url ;
    win.focus() ;
}

gBtn.addEventListener('click' , gBtnClickEventFunctionPointer) ;
yBtn.addEventListener('click' , yBtnClickEventFunctionPointer) ;
fBtn.addEventListener('click' , fBtnClickEventFunctionPointer) ;

//-----------------------------------------------------------------


//Question 4 : Write a javascript program to keep fetching contents of a wesite every 5 seconds
// const fetchContent = async (url) =>{
//     con = await fetch(url) ;
//     let a = await con.json() ;
//     return a ;
// }

// setInterval(async ()=>{
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetchContent(url))
// } , 5000) ;

//-----------------------------------------------------------------



//Question 5 : Create a glowing bulb effect using classlist toggle in javascript
setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb") ;
}, 1000) ;


//-----------------------------------------------------------------