var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FullStackDB?readPreference=primary&appname=MongoDB+Compass&directConnection=true&ssl=false').
then(() => {
	console.log("Connected to Database");
}).catch((err) => {
    console.log("Error connecting to database: ", err);
});