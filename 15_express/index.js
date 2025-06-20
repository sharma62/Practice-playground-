const express = require('express');
const app= express();
const port = 5050;

app.get('/',(req,res)=>{
    res.send("hello home page")
})
app.get('/about',(re,res)=>{
    res.send("hello about page")
})

app.listen(port,()=>{
    console.log(`server runing on localhost:${port}`)
})