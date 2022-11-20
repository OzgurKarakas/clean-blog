const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const moment = require('moment');
// console.log(moment().format('DD/MM/YYYY'));

const BlogPost = new Schema({
    title: String,
    detail: String,
    dateCreated: { type: Date, default: Date.now }
  }); 

  const Post = mongoose.model('Post', BlogPost);

  module.exports=Post;