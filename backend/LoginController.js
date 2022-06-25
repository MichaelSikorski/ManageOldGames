var express = require('express');
var router = express.Router();
var passport = require("passport");
var bodyParser = require('body-parser');
var app = require('./app');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/login', function (req, res) {
	let username = req.body.uname;
	let password = req.body.pass;
	
	console.log(`Login attempted ${req.body.uname}, ${req.body.pass}`);
	
	if (username === "admin" && password === "password") {
		
		res.status(200).send(`Admin logged in`);
	} else {
		res.status(400).send(`Invalid username or password`);
	}
	
});

/* router.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}), function (req, res) {
	console.log("Login attempted");
}); */

/* 
	app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
}); */

router.get('/logout', function (req, res) {
	res.status(200).send("Logging out");
});

module.exports = router;

