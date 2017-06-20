var Mongoose  = require('mongoose');
var db        = Mongoose.createConnection('localhost', 'blog');

//数据库配置
var isDev     = true;
var host      = isDev ? '127.0.0.1' : '';
var database  = isDev ? 'blog' : '';
var port      = isDev ? '27017': '';  

//链接数据库
Mongoose.connect('mongodb://' + host + ':' + port + '/' + database);

db.on('connect', function(){
  console.log('数据库连接成功');
});

db.on('disconnect', function(){
  console.log('数据库链接断开');
});

db.on('error', function(err){
  console.log('数据库链接出错: '+ err);
  db.close();
});

db.on('close', function(){
  Mongoose.Promise = global.Promise;
  Mongoose.connect('mongodb://' + host + ':' + port + '/' + database);
});

exports.db        = db;
exports.Mongoose  = Mongoose;