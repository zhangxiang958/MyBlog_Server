var Proxy = require('../proxy');

module.exports = function(router){

  router.use(function(req, res, next){
    console.log('posts router');
    next();
  });

  router.get('/', function(req, res){
    res.json({message: 'posts'});
  });

  router.route('/posts')

    .get(function(req, res){
      var page = req.query.page;
      var perpage = req.query.perpage;

      Proxy.Posts.getPostsList(page, perpage, function(err, postsList){
        
        if(err) {
          
          res.send({
            code: 1,
            msg: err
          });
        } else {

          res.send({
            code: 0,
            data: postsList
          });
        }
      });
    });
}