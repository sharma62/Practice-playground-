
const fs  = require('fs');
let appendData = "\n Recently I am learning Node.js and Express.js, I am enjoying it a lot.";
fs.appendFile('./data.txt',appendData,(err)=>{
    if(err)throw err
    console.log("Data appended successfully");
})