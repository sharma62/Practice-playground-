const fs = require("./../fs_module"); // or const fs = require("fs"); // direct import
let data = "Hello, my name is suraj kumar, I am a software engineer, I love to code and learn new things.";
fs.writeFile('./data.txt',data,(err)=>{
    if(err) throw err;  
    console.log("File written successfully");
})