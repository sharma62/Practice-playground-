const express = require("express");
const app = express();
//Q 1. i am try to call next middleware or last responese after 5 sec but it's not working why
//why 5 sec -  in 5 sec main user ki kuch loading type dikana chata hu
const myMiddleware = (req, res, next) => {
  console.log("before next");
  setTimeout(() => {
    next(); // Call next() after aa delay
  }, 5000); // Simulate a delay of 5 seconds
  console.log("after next");
  console.log("Middleware executed");
  console.log("Request URL:", req.url);
};

const newMiddleWare = (req, res, next) => {
  res.send("Hello from MY-middleware is !"); // Send a response directly from the middleware
};
// app.use(myMiddleware); // Use the middleware globally

app.get("/", myMiddleware, newMiddleWare, (req, res) => {
  res.send("hello home page");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
