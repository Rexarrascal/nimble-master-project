const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.use((req, res, next) => {
  res.send("404 Not Found");
});
module.exports = router;
