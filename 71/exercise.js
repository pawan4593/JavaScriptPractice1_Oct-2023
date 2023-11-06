// Q1 : Use a free API from the internet and feed your app with live data
let url = "https://kontests.net/api/v1/all" ;
let response = fetch(url) ;
response.then(value=>{
    return value.json() ;
}).then(contests=>{
    console.log(contests);
    iHtml = ""
    for(item in contests){
        console.log(contests[item]);
        iHtml += `
                <div class="card mx-4 my-2" style="width: 18rem;">
                    <img src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${contests[item].name}</h5>
                        <p class="card-text"><a href="${contests[item].url}">Visit here</a></p>
                        <p class="card-text">Starts at ${contests[item].start_time}</p>
                        <p class="card-text">Ends at ${contests[item].end_time}</p>
                        <p class="card-text">Duration is ${contests[item].duration}</p>
                        <p class="card-text">Site is ${contests[item].site}</p>
                        <p class="card-text">Status is ${contests[item].status}</p>
                        <p class="card-text">In 24 Hours ? is ${contests[item].in_24_hours}</p>
                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Here</a>
                    </div>
                </div>
                `
    }
    cardContainer.innerHTML = iHtml ;
}) ;




//-------------------------------------------------------------------------------------------------------

// Q2 : Create a note saving app which stores your note to local storage

// let a = prompt("Enter yout note : ") ;
// sessionStorage.setItem("note" , a) ;


//-------------------------------------------------------------------------------------------------------

// Q3 : Repeat the last question and fetch the note which was saved

// let n = sessionStorage.getItem("note") ;
// alert("Your note is : " + n ) ;



//-------------------------------------------------------------------------------------------------------

// Q4 : Delete the note in the previous question


// let c = confirm("Do you want to delete your note") ;
// if(c)
//     sessionStorage.removeItem("note")


//-------------------------------------------------------------------------------------------------------