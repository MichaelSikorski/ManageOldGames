var express = require('express');
const cors = require('cors');
var db = require('./db');
const requestHandler = require('./requestHandler');


const hostname = '127.0.0.1';
const port = 3000;

var app = express();
app.listen(port, function() {
	console.log(`Server running at http://${hostname}:${port}/`);
});

const options = {
	origin: 'http://localhost:4200',
}
// app.use(cors(options));

var GameController = require('./GameController');
app.use('/games', GameController);
