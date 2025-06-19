
const fs = require('fs')

fs.readFile('./data.txt','utf-8',(err,data)=>{
    if(err)throw err
    console.log("file read successfully");
    console.log((data));
    
    

})