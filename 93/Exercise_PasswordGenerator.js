// Q : Create a JavaScrpt program capable of generating a password which contains atleast one lowercase , one uppercase and one speacial characters . Create a passoword class to achieve the same .

class Password{
    constructor(){
        this.pass = "" ;
        console.log("ctor : Password");
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz" ;
        let nums = "1234567890" ;
        let spChars = "!@#$%^&*()~" ;
        if( len<3 ){
            console.log("Password should be atleast 3 characters long");
        }
        else{
            let i = 0 ;
            while(i < len){
                this.pass += chars[Math.floor(Math.random()*chars.length)] ;
                this.pass += nums[Math.floor(Math.random()*nums.length)] ;
                this.pass += spChars[Math.floor(Math.random()*spChars.length)] ;
                i+=3 ;
            }
            this.pass = this.pass.substring(0,len) ;
        }
    }
    displayPassword(){
        console.log(`Password : ${this.pass}`);
    }
}

let p = new Password() ;
p.generatePassword(10) ;
p.displayPassword() ;