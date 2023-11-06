class railwayForm{
    // name = "" ;
    submit(){
        alert("form submitted : " + this.trainNumber) ;
    }

    cancel(){
        alert(this.name + " and " + this.trainNumber + " form cancelled")
    }

    fill(givenname , trainNumber){
        this.name = givenname ;
        this.trainNumber = trainNumber ;
    }
}

let gogoForm = new railwayForm() ;
gogoForm.fill("gogo" , 1234) ;
let pogoForm = new railwayForm() ;
pogoForm.fill("pogo" , 5678) ;

gogoForm.submit() ;
pogoForm.submit() ;

pogoForm.cancel() ;