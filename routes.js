module.exports = function(router){
	require("./app/routes/index_router")(router);
	require("./app/routes/users_router")(router);
	require("./app/routes/short_story_router")(router);
}