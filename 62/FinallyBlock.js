const f = ()=>{
    try {
        let a = 0 ;
        // console.log(x);
        console.log("Program ran successfully");
        return ;
    } catch (error) {
        console.log(error);
        console.log(y);
    } finally{
        console.log("This is finally");
        //We usually do final cleanups like close the file , exit the loop , write to the log file etc
    }
}

f() ;