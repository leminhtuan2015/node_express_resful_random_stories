var media = {
	id: "",
	title: ""
}

var MODEL_NAME = "Media"
var mongoose = require("mongoose")
var media_schema = mongoose.Schema(media)
var media_model = mongoose.model(MODEL_NAME, media_schema)

module.exports = media_model