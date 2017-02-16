'use strict';

const PostSchame = require('../model/post');

module.exports = app => {
  class ListService extends app.Service {
    constructor(ctx){
      super(ctx);
    }

    * getCount(){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let count = postModel.count('_id');
      return count;
    }
    
    * getList (pageSize){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let list = postModel.find().sort({'time.date':-1}).limit(pageSize)    
      return list;
    }

    * getPage(pageIndex,pageSize){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let skipCount = pageIndex == 1 ? 0 : (pageIndex - 1) * pageSize;
      let list = postModel.find().skip(skipCount).sort({'time.date':-1}).limit(pageSize)
      return list;
    }

  };

  return ListService;
}