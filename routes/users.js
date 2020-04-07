var express = require("express");
var secured = require("../config/middleware/secured");
var router = express.Router();

/* GET user profile. */
// eslint-disable-next-line no-unused-vars
router.get("/user", secured(), function (req, res, next) {
  // eslint-disable-next-line no-unused-vars
  const { _raw, _json, ...userProfile } = req.user;
  res.render("user", {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: "Profile page"
  });
});

module.exports = router;
