
function play(){
    var audio = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav") ;
    audio.play() ;
}

setInterval(()=>{
    let d = new Date() ;
    time.innerHTML = d.toDateString()+" "+d.toTimeString() ;
} , 1000) ;


// setTimeout(()=>{
//     play() ;
// } , 2000) ;

const setAlarm = (seconds)=>{
    let d = new Date().getTime() ;
    setTimeout(()=>{
        play() ;
    } , seconds*1000);

    setInterval(()=>{
        secondsLeft = d+ seconds * 1000 - (new Date().getTime() ) ;
        if(secondsLeft > 0){
            alarm.innerHTML = `Alarm ringing in ${Math.floor(secondsLeft/1000)} seconds`
        }
    } , 1000)
}
let doSomething =()=>{
    let s = prompt("Set alarm in seconds : " ) ;
    setAlarm(Number.parseInt(s)) ;
}
