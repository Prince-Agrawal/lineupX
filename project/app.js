var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recrutersRoute = require('./routes/recruters');
var jobRoute = require('./routes/job')
var Company_recruiterRoute = require('./routes/company/company_recruiter')
var Company_infoRoute = require('./routes/company/company_info')
var Account_settingsRoute = require('./routes/company/acc_settings')
var Account_managerRoute = require('./routes/company/account_manager');

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
app.use('/recruters', recrutersRoute)
app.use('/job' , jobRoute)
app.use('/company_recruiter' , Company_recruiterRoute);
app.use('/company_info' , Company_infoRoute);
app.use('/account_settings' , Account_settingsRoute);
app.use('/account_manager' , Account_managerRoute);






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
