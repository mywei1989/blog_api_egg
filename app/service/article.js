'use strict';

const PostSchame = require('../model/post');

module.exports = app => {
  class ArticleService extends app.Service {
    constructor(ctx){
      super(ctx);
    }

    * getArticle(year,month,name){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let count = postModel.count('_id');
      return count;
    }
    

  };

  return ArticleService;
}