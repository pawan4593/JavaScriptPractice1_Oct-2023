//IIFE is javascript function that runs as soon as it is defined .
//It is used to avoid polluting the global namespace , execute async-await function etc


let a = ()=>{   
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(45) ;
        }, 4000);
    })
}

// let f = async ()=>{

//     let b = await a() ;
//     console.log( b );
//     let c = await a() ;
//     console.log( c );
//     let d = await a() ;
//     console.log( d );
// }

// f() ;

//Rather than doing the above code we can use IIFE
(   
    async()=>{
        let b = await a() ;
        console.log( b );
        let c = await a() ;
        console.log( c );
        let d = await a() ;
        console.log( d );
    }
)()