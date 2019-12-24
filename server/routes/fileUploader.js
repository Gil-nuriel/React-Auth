const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async function(req, res) {
  return res.sendStatus(200);
});

module.exports = router;
