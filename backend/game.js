var mongoose = require('mongoose');  
var GameSchema = new mongoose.Schema({
	_id: {
		oid: String
	},
	title: String,
	platform: String,
	genre: String,
	release: Date,
	price: Number,
	stock: Number
}, { collection : 'games_list' });
// mongoose.model('Game', GameSchema);
module.exports = mongoose.model('Game', GameSchema);