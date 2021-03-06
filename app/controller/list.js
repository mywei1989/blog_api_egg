'use strict';


module.exports = app => {
  class ListController extends app.Controller {
    * list(){
      const ctx = this.ctx;
      const pageSize = this.config.pageSize || 3;
      
      const list = yield ctx.service.list.getList(pageSize);
      const pageCount = yield ctx.service.list.getCount();
      this.ctx.body = {
        list:list,
        pagination:{
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }
    * page(){
      const ctx = this.ctx;
      const pageIndex = parseInt(this.ctx.params.page) || 1;
      const pageSize = this.config.pageSize || 3;

      const pageCount = yield ctx.service.list.getCount();
      const list = yield ctx.service.list.getPage(pageIndex,pageSize);
      this.ctx.body = {
        list:list,
        pagination:{
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }
  }
  return ListController;
}
