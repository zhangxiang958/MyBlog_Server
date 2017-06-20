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
      var id = req.query.id;
      
    });
}