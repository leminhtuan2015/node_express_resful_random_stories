index_controller = {
  index: function(req, res, next) {
    res.render('index/index', { title: 'Express' });
  }
}

module.exports = index_controller;
