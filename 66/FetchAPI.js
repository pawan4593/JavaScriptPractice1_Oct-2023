//Why fetch needs two then() ???
// 1. Fetch is promise
// Fetch is used to get the data over the netwoek
// Getting a response is two stage process
// 1 . An object of Response class contains a 'status' and 'ok' properties
//      status - The http status code
//      ok - boolean , true if the http status code is 200-299
//2 . After that we need to another method to access the body in the different format -
//      response.get() - Read and return text
//      OR
//      response.json() - parse and respond as json
//
//      Other methods include response.formData() , response.blob() , response.arrayBuffer() etc
//Note - We can use only one body reading method . response.text() or response.json() ;



let p = fetch("https://goweather.herokuapp.com/weather/Ny") ;
p.then(response=>{
    console.log(response.status) ;
    console.log(response.ok) ;
    console.log(response.headers);
    // return response.text() ;
    return response.json() ;
}).then(value2=>{
    console.log(value2) ;
})
