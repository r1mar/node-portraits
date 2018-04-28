var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');

var error = require('./error/route');
var i18n = require('i18n');

var app = express();

// view engine setup
app.set('views', path.join(__dirname));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.raw());
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

//Setup dirs with static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/app', express.static(path.join(__dirname, '../dist')));
app.use('/stylesheets', express.static(path.join(__dirname, '../node_modules/material-design-icons/iconfont')));
app.use(express.static(path.join(__dirname, '../node_modules/tether/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, '../node_modules/font-awesome')));

//setup translations
i18n.configure({
    locales:['de' ],
    directory: __dirname + '/locales',
    //autoReload: true, Unit test did not works with this option
    cookie: "nodepage-locale",
    defaultLocale: 'de',
    objectNotation: true
});
app.use(i18n.init);

//Shared views middleware
app.use(function(req, res, next){
  res.locals.lang = req.getLocale();
  res.locals.originalUrl = req.originalUrl;
  next();
});

//Module routers
var home = require('./home/router');
var users = require('./user/router');
var locales = require('./locales/router');
var order = require('./order/router');
var image = require('./image/router');
var portraitKind = require('./portrait-kind/router');

app.use('/locales', locales);
app.use('/', home);
app.use('/user', users);
app.use('/order', order);
app.use('/image', image);
app.use('/portrait-kind', portraitKind);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(error);

module.exports = app;
