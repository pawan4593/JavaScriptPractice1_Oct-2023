let arr = [23,54,234,54,57,68,346,568,643,5] ;

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]) ;
// }

// arr.forEach(element =>{
//     console.log(element*element) ;
// });


//Convert any collection/group into an array
// // Array.from()
// let name = "Harry" ;
// let arrr = Array.from(name) ;
// console.log(arrr) ;


// for(i of arr){
//     console.log(i) ;
// }


for(let i in arr){
    console.log(arr[i] * arr[i]) ;
}


