let p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        alert("Hey I am resolved .") ;
        resolve(1) ;
    } , 3000) ;
}) ;

p1.then(value=>{    //1st handler
    console.log("Congratulations this promise is now resolved : " + value ) ;
})

p1.then(()=>{   //2nd independent handler which will be executing after 1st handler because it is written after 1st handler .
    alert('Hurray !') ;
}) ;