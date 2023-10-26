setTimeout(()=>{console.log("set timeout 1000")} , 1000) ;

try{
    console.log(jiro) ;
}catch(error){
    console.log("Error : " + error)
}

setTimeout(()=>{console.log("set timeout 2000")} , 2000) ;

try{
    //Since the code below is scheduled(setTimeout Function) , try catch won't work
    setTimeout(()=>{
        console.log(jiro) ;
    } , 10)
}catch(error){
    console.log("Error : " + error)
}
setTimeout(()=>{console.log("set timeout 3000")} , 3000) ;


try{
    //Since the code below is scheduled(setTimeout Function) , try catch won't work
    setTimeout(()=>{
        //This will work , This error will be handled .
        try{
           console.log(jiro) ;
        }catch(error){
            console.log("Inside try-catch block already : " + error)
        }
    } , 10)
}catch(error){
    console.log("Error : " + error)
}
setTimeout(()=>{console.log("set timeout 4000")} , 4000) ;