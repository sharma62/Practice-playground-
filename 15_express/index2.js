const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs"); // Set EJS as the template engine
app.get("/", (req, res) => {
  res.render("home", { name: "suraj", age: 25 }); // Render the 'home' view with data
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
