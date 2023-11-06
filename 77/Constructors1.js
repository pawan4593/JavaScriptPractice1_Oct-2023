class railwayForm{
    // name = "" ;
    constructor(name , trainNumber){
        console.log("Constructor called");
        this.name = name ;
        this.trainNumber = trainNumber ;
    }

    submit(){
        alert("form submitted for " + this.trainNumber +" by " + this.name ) ;
    }

    cancel(){
        alert(this.name + " and " + this.trainNumber + " form cancelled")
    }

    fill(givenname , trainNumber){
        this.name = givenname ;
        this.trainNumber = trainNumber ;
    }
}

let gogoForm = new railwayForm("gogo" , 1234) ;
// gogoForm.fill("gogo" , 1234) ;
let pogoForm = new railwayForm("pogo" , 5678) ;
// pogoForm.fill("pogo" , 5678) ;

gogoForm.submit() ;
pogoForm.submit() ;

pogoForm.cancel() ;