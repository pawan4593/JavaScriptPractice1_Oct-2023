// Exercise : Create a digital seconds clock using setInterval and Date object in JavaScript
//The Date object can be used to get the date , time , hours and seconds which can be updated using setInterval
//Try to keep the UI good looking



let dateObj = new Date() ;
let hours = dateObj.getHours() ;
let minutes = dateObj.getMinutes() ;
let seconds = dateObj.getSeconds() ;
let date = dateObj.getDate() ;

console.log(date , hours , minutes , seconds ) ;
