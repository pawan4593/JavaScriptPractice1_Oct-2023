let clockDiv = document.getElementById("clockDiv") ;
// let clockSpan = document.getElementById("clockSpan") ;

let newSpan = document.createElement('span') ;
newSpan.setAttribute('id', 'clockSpan' ) ;

setInterval(()=>{
    let date = new Date() ;
    newSpan.innerHTML = `${date}` ;
    clockDiv.insertAdjacentElement( 'afterbegin' , newSpan ) ;
},1000)













