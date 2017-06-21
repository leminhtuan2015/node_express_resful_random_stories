var short_story_controller = require('../controllers/short_story_controller');

/* GET home page. */

module.exports = function(router){
	router.get('/short_story', function(req, res, next) {
		short_story_controller.index(req, res, next)
	});

	router.get('/short_story/random', function(req, res, next) {
		short_story_controller.random(req, res, next)
	});

	router.get('/short_story/create', function(req, res, next) {
		short_story_controller.create(req, res, next)
	});
}
