var PostsModel = require('../models/Posts.js');

exports.addNewPosts = function(data, callback){
  console.log(data);

  var newPost = PostsModel({
    title: data.title,
    summary: data.summary,
    tags: data.tags,
    publish_date: data.publish_date,
    content: data.content,
    pageView: 0
  });
}

exports.getPostDetail = function(id, callback){
  console.log(id);
  PostsModel.findOne({
    _id: id
  })
  .exec(callabck);
}