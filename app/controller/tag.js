'use strict';


module.exports = app => {
  class TagController extends app.Controller {

    * list(){
      const ctx = this.ctx;
      const pageSize = this.config.pageSize || 3;
      
      const tagStr = this.ctx.params.tag || '';
      const pageCount = yield ctx.service.tag.getCount(tagStr);
      const list = yield ctx.service.tag.getList(pageSize,tagStr);
      this.ctx.body = {
        list:list,
        pagination:{
          prefix:'/tag/'+tagStr,
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }
    * page(){
      const ctx = this.ctx;
      const pageIndex = parseInt(this.ctx.params.page) || 1;
      const pageSize = this.config.pageSize || 3;

      const tagStr = this.ctx.params.tag || '';
      const pageCount = yield ctx.service.tag.getCount(tagStr);
      const list = yield ctx.service.tag.getPage(pageIndex,pageSize,tagStr);
      this.ctx.body = {
        list:list,
        pagination:{
          prefix:'/tag/'+tagStr,
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }


  }
  return TagController;
}
