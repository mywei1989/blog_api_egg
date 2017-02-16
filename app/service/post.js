'use strict';

const mongoose = require('mongoose');
const PostModel = require('../model/post');

module.exports = app => {
  class PostService extends app.Service {
    constructor(ctx){
      super(ctx);
      this.mongoUrl = this.ctx.app.config.mongoUrl;
      this.mongodb = mongoose.connect(this.mongoUrl);
    }

    * getCount(){
      const aa = this.mongodb.model('post',PostModel);
      //const aa = PostModel.count('_id')

      return aa.count('_id');
    }
    
  };

  return PostService;
}