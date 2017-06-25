var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');

//router
var Post = require('./posts.js');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

/* GET home page. */
router.get('/', function(req, res) {
  fs.readFile('markdowns/JavaScript 核心学习——闭包.md', function(err, data) {
    var html = marked(data.toString());
    res.send(html);
  });
  // res.send('routers index');
});

router.get('/md', function(req, res) {
  fs.readFile('markdowns/当我在谈论前端监控时我在谈什么.md', function(err, data) {
    var html = marked(data.toString());
    res.send(html);
  });
  // res.send('routers index');
});

Post(router);

module.exports = router;
