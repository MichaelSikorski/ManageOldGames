var url = require('url');
var Game = require('./Game');
var Controller = require('./GameController');

const validRequests = ["/create","/read","/update","/delete"];

exports.handleRequest = function(req, res) {

	let path = url.parse(req.url, true).pathname;
	console.log("Query received: ");
	console.log(path);
		
	if (validRequests.includes(path)) {
		/* res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		console.log("Valid path");
		console.log(path);
		res.write('Valid request recieved: ' + path);
		res.end(); */
		
		if (path === "/read") {
			// res.end("Here is the list of games");
			Game.find({}, function (err, games) {
				if (err) {
					return res.status(500).send("There was a problem finding the games.");
				}
				return res.status(200).send(games);
			});
			
			
		} else if (path === "/create") {
			res.end("Added game to database");
		} else if (path === "/update") {
			res.end("Game information has been updated");
		} else if (path === "/delete") {
			res.end("The specified game has been removed from the database");
		}
		
		
	} else {
		
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		console.log("Invalid path");
		console.log(path);
		res.write('Invalid request recieved: ' + path);
		res.end();

	} 
};