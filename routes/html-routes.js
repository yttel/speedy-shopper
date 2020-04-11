const express = require("express");
const router = express.Router();
const groceryCont = require("../controller/groceryController");

// router.get("/", function (req, res) {
//   res.render("index.handlebars");
// });

router.get("/signin", function (req, res) {
  res.render("signin.handlebars");
});

// router.get("/", (req, res) => {
//   res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
// });

router.get("/list", function (req, res) {
  const hhID = 1; //dynamic later
  groceryCont.allByHousehold(hhID).then((response) => {
    var hbsObject = {
      listItem: response,
    };
    console.log(response);
    res.render("list.handlebars", hbsObject);
  });
});

router.get("/", function (req, res) {
  groceryCont.allItems().then((response) => {
    var hbsObject = {
      Item: response,
    };
    res.render("index.handlebars", hbsObject);
  });
});

router.get("/edit", function (req, res) {
  groceryCont.allItems().then((response) => {
    var hbsObject = {
      Item: response,
    };
    res.render("index.handlebars", hbsObject);
  });
});

module.exports = router;
