
const http = require('http');
const PORT  =3000;
const server = http.createServer((req,res)=>{
console.log(`Request received: ${req.method} ${req.url}`);

  if(req.method ==='GET' && req.url=='/'){
     console.log(`Handling GET request for ${req.url}`);
     res.write(`hello from the server! You requested ${req.url}`)
  }else if(req.method ==='POST'){
    console.log(`heandling Post type Reaquest for ${req.url}`)
    res.write(`hello from the server! You requested ${req.url} with a POST request`);
  }else{
    console.log(`Handling other type of request for ${req.url}`);
    res.write(`hello from the server! You requested ${req.url} with a different request type`);
  }
  res.end(); // End the response
})


server.listen(PORT,()=>{
    console.log("server is ruuning on port ",PORT)
})