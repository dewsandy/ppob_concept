var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pulsa = require('./public/data/pulsa.json');
const emoney = require('./public/data/emoney.json');
const pln = require('./public/data/pln.json');
const game = require('./public/data/game.json');
const tagihan = require('./public/data/tagihan.json');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/dataProduk', function (req, res) {
  data = req.body.id_produk;
  menu = req.body.channel;
  
  if(menu=="pulsa") tes = pulsa.filter(a=> a.id_provider==data);
  if(menu=="emoney") tes = emoney.filter(a=> a.id_provider==data);
  if(menu=="tagihan") tes = tagihan.filter(a=> a.id_provider==data);
  if(menu=="game") tes = game.filter(a=> a.id_provider==data);
  if(menu== "token") tes = pln.filter(a=> a.id_provider==data);

  res.send(tes[0].list_produk);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
