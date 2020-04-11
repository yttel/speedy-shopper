const express = require("express");
const router = express.Router();
const groceryController = require("../controller/groceryController");

//change boolean for obtained
router.post("/api/obtained", function (req, res) {
  console.log(`LIST ITEM ID: ${req.body.id}`);
  groceryController.gotItFlip(true, req.body.id).then(() => {
    return res.status(200).end();
  });
});

//change boolean for next time
router.post("/api/nextTime", function (req, res) {
  groceryController.nextTimeFlip(true, req.body.id).then(() => {
    return res.status(200).end();
  });
});

//done shopping aka clear list and bring to edit screen
router.post("/api/allDone", function (req, res) {
  const hhID = 1; //dynamic later
  groceryController.shopDone(hhID).then(() => {
    return res.status(200).end();
  });
});

router.post("/api/unobtained", function (req, res) {
  console.log(`LIST ITEM ID: ${req.body.id}`);
  groceryController.gotItFlip(false, req.body.id).then(() => {
    return res.status(200).end();
  });
});

router.post("/api/undonexttime", function (req, res) {
  console.log(`LIST ITEM ID: ${req.body.id}`);
  groceryController.nextTimeFlip(false, req.body.id).then(() => {
    return res.status(200).end();
  });
});

router.post("/api/makeIt", function (req, res) {
  const hhID = 1;
  console.log(`List Item ID: ${req.body.id}`);
  groceryController.addListItem(hhID, req.body.id).then(() => {
    return res.status(200).end();
  });
});

router.get("/api/optionsList:id", function (req, res) {
  console.log("here we are");
  let catID = 1;
  let catval = $(".categories").val();
  console.log(catval);
  console.log(`List Item ID: ${req.body.id}`);
  groceryController.itemsByCategory(catID).then(() => {
    return res.status(200).end();
  });
});
module.exports = router;
