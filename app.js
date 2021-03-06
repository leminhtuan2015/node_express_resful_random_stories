var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var router = express.Router()

var app = express()


setting_view_engine()
setting_routers()
setting_express()
handle_error()

function setting_view_engine(){
    // view engine setup
    app.set('views', path.join(__dirname, 'app/views'));
    app.set('view engine', 'jade')
}

function setting_routers(){
    require("./routes")(router)
}

function setting_express(){
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
    app.use(express.static(path.join(__dirname, 'app/public')))

    app.use(router);
}

function handle_error(){
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      var err = new Error('Not Found')
      err.status = 404
      next(err)
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500)
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
}



module.exports = app
