console.log(document.cookie);
document.cookie = "name1 = 'john snow'" ;
document.cookie = "name2 = 'john cena'" ;
document.cookie = "name3 = 'john mcLaive'" ;

let key = prompt("Enter thy key : ")
let value = prompt("Enter thy value : ")
// document.cookie = `${key} = ${value}` ; // Try entering key as -  ;;;
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` ;

// decodeURIComponent(key) / decodeURIComponent(value) function can be used to decode the encoded URIs 

console.log(document.cookie);

//Also there are options like path , expires etc.
//Cookies are sent by browser to server on every request . This doesnt happen with local storage.