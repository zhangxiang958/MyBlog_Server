//server.js

//BASE SETUP
//====================================

//call the packages we need
var express             = require('express');
var app                 = express();
var bodyParser          = require('body-parser');
var morgan              = require('morgan');
var fs                  = require('fs');
var path                = require('path');
var fileStreamRotator   = require('file-stream-rotator');

//call routers modules
var indexRouter = require('./routes/index.js');

//LOG
var logDir = path.join(__dirname, 'logs');

//ensure log directory exists
fs.existsSync(logDir) || fs.mkdirSync(logDir);
//create a rotating write stream
var accessLogStream = fileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDir, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: true
});


//APP CONFIG
//====================================
//configure app to use BodyParser();
//this will let us get the data form a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//log module
app.use(morgan('short'));
app.use(morgan('combined', {
    stream: accessLogStream
}));

var port = process.env.PORT || 8080;  //set port


//REGISTER OUR ROUTES
//===================================
//route 控制 后台接口
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/', indexRouter);



//ERROR HANDLE
app.use(function(req, res, next){
    res.status(404).send('Not Found');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//START THE SERVER
//====================================
app.listen(port, function(){

    console.log('server is listening to port ' + port);
});