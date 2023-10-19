
const changeBgRed = ()=>{
    document.body.firstElementChild.style.background = "red" ;
}

let b = document.body ;

//This will give me text node i.e. indentation and spaces are also considered
console.log("First child of the b is : " , b.firstChild)

//This will give me actual element i.e. <nav> ... </nav> if there is any . Spaces and indentations are ignored
console.log("First element of the b is : " , b.firstElementChild)