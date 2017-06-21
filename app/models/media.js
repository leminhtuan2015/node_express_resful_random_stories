var media_model = {
	id: "",
	title: "",
	content: ""
}

var TABLE_NAME = "media"
var mongoose = require("mongoose")
var media_schema = mongoose.Schema(media)
var media = mongoose.model(TABLE_NAME, media_model)
var db = mongoose.connection

mongoose.connect('mongodb://localhost/test');

db.on('error', console.error.bind(console, 'at filemedia.js >>>>>>> connection error:'));
db.once('open', function() {
	console.log("Mongo DB Connected successfull")
});

module.exports = media