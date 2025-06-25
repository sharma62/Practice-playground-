const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
  res.send("Hello from MY-middleware!"); // Send a response directly from the middleware
  setTimeout(() => {
    next(); // Call next() after a delay
  }, 5000); // Simulate a delay of 5 seconds
  console.log("Middleware executed");
  console.log("Request URL:", req.url);
};

// app.use(myMiddleware); // Use the middleware globally

app.get("/", myMiddleware, (req, res) => {
  res.send("hello home page");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
