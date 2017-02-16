'use strict';

const PostSchame = require('../model/post');

module.exports = app => {
  class ArchiveService extends app.Service {
    constructor(ctx){
      super(ctx);
    }

    * getCount(year,month){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let count = postModel.count({"time.monthQuery":year+"-"+month});
      //let count = postModel.count({'time.year':year,'time.month':month});
      return  count;
    }
    
    * getList (pageSize,year,month){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let list = postModel.find({"time.monthQuery":year+"-"+month}).sort({'time.date':-1}).limit(pageSize);
      return list;
    }

    * getPage(pageIndex,pageSize,year,month){
      let postModel = this.ctx.app.mongodb.model('post',PostSchame);
      let skipCount = pageIndex == 1 ? 0 : (pageIndex - 1) * pageSize;
      let list = postModel.find({"time.monthQuery":year+"-"+month}).skip(skipCount).sort({'time.date':-1}).limit(pageSize)
      return list;
    }

  };

  return ArchiveService;
}