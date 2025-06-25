const express = require('express');
const app = express();

const customMiddlware = (req,res,next)=>{
    console.log(`Requested URL : ${req.url}`);
    console.log(`Requested Method : ${req.method}`);
    const isLogin = false; // Simulating a login check
    if(isLogin){
        next(); // Proceed to the next middleware or route handler
    }else{
        res.status(400).send("You are not logged in");
    }
}



app.get('/',(req,res)=>{
    res.send("Hello home page");
})
app.get('/about',(req,res)=>{
    res.send("Hello about page");
})
app.post('/login',customMiddlware,(req,res)=>{
    res.send("Hello, user");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})