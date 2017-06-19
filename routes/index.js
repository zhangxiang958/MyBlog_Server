var express = require('express');
var router = express.Router();
var marked = require('marked');
var fs = require('fs');


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

/* GET home page. */
router.get('/', function(req, res) {
  fs.readFile('markdowns/JavaScript 核心学习——闭包.md', function(err, data) {
    var html = marked(data.toString());
    res.send(html);
  });
  // res.send('routers index');
});

module.exports = router;
