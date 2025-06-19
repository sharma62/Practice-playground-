 const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "file.txt"), "Hello, suraj", (err) => {
  if (err) throw err;
});

// console.log("dir:",path.join(__dirname,"file.txt"))
// console.log("file:",__filename)

// step 1 define directory path
const folderPath = path.join(__dirname);

//step: read all file from the directory

fs.readdir(folderPath,(err,files)=>{ 
    if(err) throw err;

    // step 3: loop throuh all files and print them
    files.forEach((file)=>{
        console.log(file)
    })
})





