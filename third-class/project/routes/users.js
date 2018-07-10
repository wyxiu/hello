var express = require('express');
var router = express.Router();
var UserController = require("../controllers/UserController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login",function(req,res,next){
	res.send("login")
});

router.post("/register",UserController.register);

module.exports = router;
