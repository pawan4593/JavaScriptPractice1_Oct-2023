let a = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML +  '<h1>Hello World</h1>' 

let newDiv = document.createElement('div') ;
newDiv.innerHTML = '<p> Welcome to the new age </p>' ;
newDiv.setAttribute('class' , 'someClassName') ;
// a.append(newDiv) ;
// a.prepend(newDiv) ;
// a.before(newDiv) ;
// a.after(newDiv) ;
a.replaceWith(newDiv) ;