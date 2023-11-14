//regexr.com . Go to this website to learn more .
// Regular expression is used to find or create matching patterns of string .
const regex = /very/g   //very global 

const text = "This is very very awesome good very chill cool very smart statement" ;

// console.log(text.replace('very',"VERY")) ;// Will replace only first occurances
console.log(text.replace(regex,"VERY")) ;

