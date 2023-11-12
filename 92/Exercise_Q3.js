//Q3 : Write a JavaScript function which resolves a Promise after n seconds . The function takes n as the parameter . Use an IIFE to execute the function with different values of n 

let a = (text , n)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(text) ;
        } , 1000 * n) ;
    }) ;
}

(
    async ()=>{
        let text = await a("Resolving after 2 secs",2) ;
        console.log(text) ;
        text = await a("Resolving after 5 secs" , 5) ;
        console.log(text) ;
    }
)()