//

function loadScript(src , callback){
    let script = document.createElement('script') ;
    script.src = src ;
    script.onload = function(){
        console.log( "Loaded script with SRC : " + src ) ;
        callback(null , src) ;
    }
    script.onerror = function(){
        console.log( "Error loading script with SRC : " + src ) ;
        callback(new Error("src got some error") , src) ;
    }
    document.body.appendChild(script) ;
}

function fun1(error , src){
    // alert('This is function 1') ;
    if(error){
        console.log(error) ;
        return ;
    }
    alert('Hello World : ' + src) ;
}

function fun2(error , src){
    // alert('This is function 1') ;
    if(error){
        console.log(error) ;
        sendEmergencyMessageToCEO(); 
        return ;
    }
    alert('Good Morning : ' + src) ;
}



// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" , fun2) ;
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" , fun1) ;