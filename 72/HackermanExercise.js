let arr = [
    "Initiating Hack tool" , 
    "Connecting to Facebook" , 
    "Connecting to server 1" , 
    "Connection Failed , Retrying ... " ,
    "Connecting to server 2 " ,
    "Connected Successfully" ,
    "Username : username0001000" ,
    "Trying brute force" , 
    "200K passwords tried" , 
    "Match not found" ,
    "Another 200K passwords tried" , 
    "Match found" ,
    "Accessing successfull" ,
    "Hack Successfull !!!"
] ;

const sleep =async (seconds)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(true) ;
        }, seconds*1000);
    })
}

const showHack = async (message)=>{
    await sleep(2)
    // console.log(message);
    text.innerHTML += message +'</br>';
}

//IIFE
(async ()=>{
    for(let i = 0 ; i < arr.length ; i++){
        await showHack(arr[i]) ;
    } 
})()