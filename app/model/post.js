'use strict';
const mongoose = require('mongoose');

const Post = new mongoose.Schema({
  _id:String,
  name:String,
  title:String,
  time:{
    date:Date
  },
  //tags:Array,
  post:String
});

//const model = mongoose.model('post',Post);

module.exports = Post;
