const express = require("express");
const router = express.Router();
const groceryCont = require("../controller/groceryController");


router.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});

router.get("/list", function(req, res){
  groceryCont.allByHousehold(3).then(response => {
    var hbsObject = {
      listItem: response
    };
    console.log(response);
    res.render("list.handlebars", hbsObject);
  });
});

router.get("/edit", function(req, res){
  groceryCont.allItems().then(response => {
    var hbsObject = {
      item: response
    };
    res.render("index.handlebars", hbsObject);
  });
});

module.exports = router;