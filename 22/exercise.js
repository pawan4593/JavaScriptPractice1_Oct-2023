let someNumber = () =>{
    return Math.random() * (100);
  }
  let num = someNumber() ;
  console.log(num) ;
  
  let score = 100 ;
  
  let randomNumber = num - num%1  ;
  
  console.log(randomNumber) ;
  
  let enteredNumber ;
  
  do{
      enteredNumber = prompt("Enter a number : ") ;
      // randomNumber == enteredNumber ? { console.log("Correct") ; break ;} : { randomNumber > enteredNumber ? {console.log("Number is greater") ; score-- ; } : {console.log("Number is smaller") ; score-- ;}} ;
      if(enteredNumber == randomNumber){
          console.log("Correct") ;
          break ;
         break ; 
      }else if(enteredNumber > randomNumber){
          console.log("Number is smaller") ;
          score-- ;
      }else{
          console.log("Number is greater") ;
          score-- ;
      }
  }while(score > 0) ;
  
  if(score == 0){
      console.log("Your IQ is : " + score ) ;
  }
  else{
      console.log("Nice . Your score is : " + score) ;
  }