var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Game = require('./Game');

router.get('/create', function (req, res) {
	res.status(200).send("New game added to database");
});

router.get('/read', function (req, res) {
	res.status(200).send("Here is the list of games");
});

router.get('/update', function (req, res) {
	res.status(200).send("Game updated");
});

router.get('/delete', function (req, res) {
	res.status(200).send("Game removed from the database");
});

module.exports = router;
