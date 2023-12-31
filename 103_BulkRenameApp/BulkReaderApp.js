const fs = require('fs');
const replaceThis = "gogo" ;
const replaceWith = "gabbar"
const preview = true ;
try {
  const data = fs.readdir("data" , (error , data)=>{
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let newFile= "data/"+item.replaceAll(replaceThis,replaceWith)
        if(!preview){            
            fs.rename("data/"+item , newFile ,()=>{
                console.log("Rename Success");
            }) ;
        }
        else{
            if( "data/"+item !== newFile )
                console.log("data/"+item + "will be renamed to" + newFile );
        }
    }
  });
  console.log(data);
} catch (err) {
  console.error(err);
}