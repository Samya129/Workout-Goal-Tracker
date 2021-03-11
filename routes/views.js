//Required dependencies:
var path = require("path");
const router = require("express").Router();

//If other or not specified, take to home route (default):
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})
//Automatic home route:
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})
//Exercise route:
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})
//Stats route:
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
})

//Export router with all get requests:
module.exports = router;