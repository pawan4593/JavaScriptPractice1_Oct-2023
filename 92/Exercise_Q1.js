//Q1 : Write a JavaSript program to print the following after 2 secodns delay :
//Hello
//World

// Not Working
// (setTimeout(()=>{
//     console.log("Hello World")
// } , 2000))()


// Pawan :Working
const a = async (text)=>{
    // setTimeout((text)=>{ //The text parameter is shadowing the text parameter of the outer async function, so it will always log undefined.
    setTimeout(()=>{
        console.log(text);
    },2000) ;
}

(
    async ()=>{ // Withoud this arrow function , Error : TypeError: a(...) is not a function
        await a("Hello") 
        await a("World") 
    }
)()



//CWH : Working
// const a = (text)=>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             // console.log(text +  " ");
//             resolve(text+" ");
//         },2000) ;
//     }) ;
// }

// (
//     async ()=>{
//         let text = await a("Hello") ;
//         console.log(text);
//         text = await a("World") ;
//         console.log(text);
//     }
// )()

