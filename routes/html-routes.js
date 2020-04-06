const express = require("express");
const router = express.Router();

router.get("/*", function(req, res){
  res.render("index.handlebars");
});

router.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});

module.exports = router;