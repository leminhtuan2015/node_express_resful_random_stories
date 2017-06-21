var media = require("../models/media")
var util = require("../utils/utils")

short_story_controller = {
 	index: function(req, res, next) {
 		util.log("hello")
    
    	res.render('short_story/index', { title: 'Express' })
  	},

    random: function(req, res, next) {

        // media.find(function (err, medias) {
        //     if (err) return console.error(err);
        //     console.log(medias);
        // })

        media.find({_id: "594a9f5cb83d6883167c7c98"}, function (err, medias) {
            if (err) {
                return console.error(err)
            }

            console.log(medias[0]);

            res.json(medias[0])
        })
  	},

  	create: function(req, res, next){

  		util.log("Creating short_story")

	    var m = new media({id: "1", title: "Hello 1", content: "hello how are you"})

	    m.save(function(err) {
            if (err) throw err

            util.log('Media saved successfully')
            res.json({ success: true })
	    });
  	}
}

module.exports = short_story_controller
