'use strict';

const PostSchame = require('../model/post');

module.exports = app => {
  class TagService extends app.Service {
    constructor(ctx){
      super(ctx);
    }

    * getCount(tagStr){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let count = postModel.count({"tags":{$elemMatch:{"tag":tagStr}}});
      return count;
    }
    
    * getList (pageSize,tagStr){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let list = postModel.find({"tags":{$elemMatch:{"tag":tagStr}}}).sort({'time.date':-1}).limit(pageSize)    
      return list;
    }

    * getPage(pageIndex,pageSize,tagStr){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let skipCount = pageIndex == 1 ? 0 : (pageIndex - 1) * pageSize;
      let list = postModel.find({"tags":{$elemMatch:{"tag":tagStr}}}).skip(skipCount).sort({'time.date':-1}).limit(pageSize)
      return list;
    }

  };

  return TagService;
}