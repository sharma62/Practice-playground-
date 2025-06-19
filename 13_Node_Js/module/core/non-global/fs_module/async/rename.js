
const fs =require('fs');

fs.rename('./data.txt','dataFile.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File renamed successfully');
    }
})