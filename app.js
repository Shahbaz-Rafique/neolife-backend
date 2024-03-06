var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./utils/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Routes
var LoginRouter = require('./routes/Login/login');
var getProfileRouter = require('./routes/Login/getProfile');
var uploadfotoRouter = require('./routes/Profile/profile');
var updateProfileRouter = require('./routes/Profile/updateProfile');
var addConsultantsRouter = require('./routes/Backend/register');
var addpolicy1Router = require('./routes/Backend/policy1');
var getPoliciesRouter = require('./routes/Backend/getPolicy');
var uploadPDFRouter = require('./routes/Backend/uploadPdf');
var getClientsRouter = require('./routes/Backend/getClients');
var addPage = require('./routes/Backend/page1');
var getDataPage = require('./routes/Backend/getData');

var app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/login', LoginRouter);
app.use('/api/v1/getprofile', getProfileRouter);
app.use('/api/v1/uploadfoto', uploadfotoRouter);
app.use('/api/v1/updateProfile', updateProfileRouter);
app.use('/api/v1/addConsultants', addConsultantsRouter);
app.use('/api/v1/addpolicy1', addpolicy1Router);
app.use('/api/v1/getPolicies', getPoliciesRouter);
app.use('/api/v1/uploadPDF', uploadPDFRouter);
app.use('/api/v1/getClients', getClientsRouter);
app.use('/api/v1/pages', addPage);
app.use('/api/v1/getDataPage', getDataPage);

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
