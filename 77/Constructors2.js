class railwayForm{
    // name = "" ;
    constructor(name , trainNumber , address){
        console.log("Constructor called");
        this.name = name ;
        this.trainNumber = trainNumber ;
        this.address = address ;
    }

    submit(){
        alert("form submitted for " + this.trainNumber +" by " + this.name ) ;
    }

    cancel(){
        alert(this.name + " and " + this.trainNumber + " form cancelled")
        this.trainNumber = 0 ;
    }

    preview(){
        alert(`Details : ${this.name} , ${this.trainNumber} , ${this.address}`)
    }

}

let ClarkForm = new railwayForm("Clark Kent" , 1234 , "Metropolis") ; 
let BruceForm = new railwayForm("Bruce Wayne" , 2345 , "Wayne Mantion Gotham") ; 

ClarkForm.preview() ;
BruceForm.preview() ;