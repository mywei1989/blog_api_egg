'use strict';


module.exports = app => {
  class ArchiveController extends app.Controller {
    * list(){
      const ctx = this.ctx;
      const pageSize = this.config.pageSize || 3;
      
      const year = this.ctx.params.year || '';
      const month = this.ctx.params.month || '';

      const pageCount = yield ctx.service.archive.getCount(year,month);
      const list = yield ctx.service.archive.getList(pageSize,year,month);
      
      this.ctx.body = {
        list:list,
        pagination:{
          prefix:'/' + year + '/' + month,
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }
    * page(){
      const ctx = this.ctx;
      const pageIndex = parseInt(this.ctx.params.page) || 1;
      const pageSize = this.config.pageSize || 3;

      const year = this.ctx.params.year || '';
      const month = this.ctx.params.month || '';

      const pageCount = yield ctx.service.archive.getCount(year,month);
      const list = yield ctx.service.archive.getPage(pageIndex,pageSize,year,month);

      this.ctx.body = {
        list:list,
        pagination:{
          prefix:'/' + year + '/' + month,
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }
  }
  return ArchiveController;
}
