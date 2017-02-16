'use strict';


module.exports = app => {
  class ListController extends app.Controller {
    * index(){
      this.ctx.body ={
        name: 'aaaa'
      };
    }

    * list(){
      const ctx = this.ctx;
      const pageSize = this.config.pageSize || 3;
      
      const list = yield ctx.service.post.getList(pageSize);
      const pageCount = yield ctx.service.post.getCount();
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

      const pageCount = yield ctx.service.post.getCount();
      const list = yield ctx.service.post.getPage(pageIndex,pageSize);
      this.ctx.body = {
        list:list,
        pagination:{
          pageIndex:1,
          pageCount:pageCount
        }
      }
    }

    * tag(){
      const ctx = this.ctx;
      const pageIndex = parseInt(this.ctx.params.page) || 1;
      const pageSize = this.config.pageSize || 3;
      const pageCount = yield ctx.service.post.getCount();
      const list = yield ctx.service.post.getPage(pageIndex,pageSize);
    }
  }
  return ListController;
}

// exports.index = function* () {
//   this.body = {
//     name: 'aaaa'
//   };
// }

// exports.getAllTag = function* () {

// }