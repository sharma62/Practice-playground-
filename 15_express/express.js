const express = require('express');
const app = express();
const port = 5050;



app.get('/',(req,res)=>{
    res.send("home page with GET request")
})
app.post('/login/:user',(req,res)=>{
    const {user} = req.params
    res.send("login page with POST request: "+user)
})
app.put('/update',(req,res)=>{
    res.send("update page with PUT request")
})
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    res.send("delete page with DELETE request:  "+id)
})

app.listen(port,()=>{
    console.log(`server running on localhost:${port}`)
})