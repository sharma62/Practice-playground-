const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Category Home Page");
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Category id: " + id);

});

module.exports= router