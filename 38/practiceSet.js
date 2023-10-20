// document.getElementsByTagName("li")[0].firstElementChild.style.color = "red" ;


//1.
Array.from(document.getElementsByTagName("li"))[0].style.color = "red"

//2.
//table without tbody : We can see tbody in devtool but not in view page source

//3.Create an element with 3 children . Now change the color of first and last element to green .

document.querySelector(".container").firstElementChild.style.color = "green" ;
document.querySelector(".container").firstElementChild.nextElementSibling.style.color = "red" ;
document.querySelector(".container").lastElementChild.style.color = "green" ;


//4.Write a javascript code to change the background color of li items to cyan
Array.from(document.getElementsByTagName("li")).forEach(element =>{
    element.style.background = "cyan"
});


//5.Which of the following is used to loof for the farthest ancestor that matches a given CSS selector
//Options : a)matches  b)closest c)contains d)none of the above
//Ans : none of the above becaust of "farthest"