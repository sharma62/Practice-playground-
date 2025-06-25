const express = require("express")
const pageRouter = require("./user/pageRouter");
const catagoryRouter = require("./catagory/catagoryRouter")
const app = express();

app.use('/', pageRouter); // Use the pageRouter for routes starting with /user
app.use('/catagory', catagoryRouter); // Use the catagoryRouter for routes starting with /catagory


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})