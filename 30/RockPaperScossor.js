
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let playerName ;
do{
    playerName = prompt("Enter your name ") ;
}while(playerName == null || playerName == "");

let promptText ;
do{
    let randomNumber = random(1 , 3) ;
    let randomChoice = randomNumber==1 ? "Rock" : randomNumber==2? "Paper" : "Scissor" ;
    promptText = prompt("Enter Rock/Paper/Scissor or Exit") ;
    
    console.log("Me(cpu) : " + randomChoice + "    and     " + `${playerName} : ` + promptText ) ;
    
    //Without if below : Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
    if(promptText != null)
        promptText = promptText.toUpperCase() ;
    randomChoice = randomChoice.toUpperCase();

    if(randomChoice == promptText){
        console.log("Draw") ;
    }else if( randomChoice == "ROCK" && promptText == "PAPER" ){
        console.log("You win") ;
    }else if( randomChoice == "PAPER" && promptText == "SCISSOR" ){
        console.log("You win") ;
    }else if( randomChoice == "SCISSOR" && promptText == "ROCK" ){
        console.log("You win") ;
    }else{
        //Any of the below if will work
        // if((promptText == "ROCK" || promptText == "PAPER" || promptText == "SCISSOR") && (promptText != "EXIT" && promptText !="" && promptText != null) )
        if((promptText == "ROCK" || promptText == "PAPER" || promptText == "SCISSOR"))
            console.log("I win") ;
    }
}while(promptText != "EXIT") ;