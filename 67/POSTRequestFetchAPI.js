const createToDo = async (todo)=>{    
    let options = {
        method : "POST" ,
        headers : {
            "Content-type" : "application/json" 
        },
        body : JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',options) ;
    let response =await p.json() ;
    return response ;
}

const getTodo = async (id)=>{
    let response =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let r = await response.json() ;
    return r ;
}

const mainFunction = async ()=>{
    let todo = {
        title : "foo2" ,
        body : "bar2" ,
        userId : 1
    }
    let todor =await createToDo(todo)
    console.log(todor) ;
    console.log(await getTodo(2)); 
}




mainFunction() ;