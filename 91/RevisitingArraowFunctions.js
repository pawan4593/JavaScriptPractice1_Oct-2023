console.log(this) ;


const sayHello = name=>
console.log("Hello"); 

sayHello("Gogo") ;

const x ={
    name :"Pogo" ,
    role : "Web Developer" ,
    exp : 20 ,
    // showName : function(){
    //     setTimeout(() => {
    //         console.log("Name is : " + this.name + ", Role : " + this.role + ", Exp : " + this.exp) ;
    //     }, 2000);
    // }
    
    showName : function(){
        let that = this ;
        setTimeout(function(){ // This type of function cant use lexical this(of the parent) hence the trick of that=this is used to pass the this object. This is old trick . Arrow functions can use lexical this(of parent) . Look up .
            // console.log(this);
            // console.log("Name is : " + this.name + ", Role : " + this.role + ", Exp : " + this.exp) ;
            console.log("Name is : " + that.name + ", Role : " + that.role + ", Exp : " + that.exp) ;
        } , 2000) ;
    }
}

x.showName() ;