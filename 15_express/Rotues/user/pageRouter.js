const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home page");
});
router.get("/about", (req, res) => {
  res.send("About page");
});
router.get("/product/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send("product id : "+ id);
});

module.exports = router;
