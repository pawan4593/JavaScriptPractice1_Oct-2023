// import './index.js' ;

const loadScript = (src)=>{
    return new Promise((resolve , reject)=>{
        
        let script = document.createElement('script') ;
        script.type= 'text/javascript' ;
        script.src = src ;
        document.body.appendChild(script) ;
        script.onload = ()=>{
            resolve("We successfully loaded the script") ;
        }
        script.onerror = ()=>{
            reject('We are sorry but we are having trouble loading script') ;
        } ;
    }) ;
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js") ;
p1.then((value)=>{
    console.log(value) ;
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js") ;
}).then((value)=>{
    console.log("Second script success ") ;
}).catch((value)=>{
    console.log(value) ;
}) ;
