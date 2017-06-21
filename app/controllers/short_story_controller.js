var media_model = require("../models/media");

short_story_controller = {
 	index: function(req, res, next) {
 		console.log("hello")
    
    	res.render('short_story/index', { title: 'Express' });
  	},

    random: function(req, res, next) {    
    	res.json({action: "index product", product: "1"})
  	},

  	create: function(req, res, next){
	    var m = new media_model({id: "1", title: "Hello 1"});

	    m.save(function(err) {
			if (err) throw err;
			console.log('Media saved successfully');
			response.json({ success: true });
	    });
  	}
}

module.exports = short_story_controller;
