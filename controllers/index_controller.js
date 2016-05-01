index_controller = {
  index: function(req, res, next) {
    res.render('index', { title: 'Express' });
  }
}

module.exports = index_controller;
