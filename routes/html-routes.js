const express = require("express");
const router = express.Router();
const groceryCont = require("../controller/groceryController")


router.get("/", (req, res) => {
  res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});

router.get("/list", function(req, res){
  groceryCont.allByHousehold(1).then(response => {
    var hbsObject = {
      listItem: response
    };
    res.render("list.handlebars", hbsObject);
  });
});

module.exports = router;