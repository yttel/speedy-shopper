const express = require("express");
const router = express.Router();
const groceryController = require("../controller/groceryController");

//change boolean for obtained
router.post("/api/obtained", function (req, res){
  console.log(`LIST ITEM ID: ${req.body}`);
  groceryController.gotItFlip(req.body.id)
    .then(() => {
      return res.status(200).end();
    });
}) ;

//change boolean for next time
router.post("/api/nextTime", function (req, res){
  groceryController.nextTimeFlip(req.body.id)
    .then(() => {
      return res.status(200).end();
    });
}) ;

//done shopping aka clear list and bring to edit screen
router.post("/api/allDone", function (req, res){
  const hhID = 1; //dynamic later
  groceryController.shopDone(hhID)
    .then(() => {
      return res.status(200).end();
    });
}) ;

module.exports = router;