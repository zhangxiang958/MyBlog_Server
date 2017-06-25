var db      = require('./database.js');
var Schema  = db.Mongoose.Schema;

var PostsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  publish_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  content: {
    type: String,
    required: true
  },
  pagaView: {
    type: Number,
    required: true
  }
}, {
  collection: 'Posts'
});

var PostsModel = db.Mongoose.model('Posts', PostsSchema);

module.exports = PostsModel;