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
      //const page = parseInt(ctx.param.page) || 1;
      const pageCount = yield ctx.service.post.getCount();
      //pageCount = 1;
      this.ctx.body = {
        pagination:{
          pageCount:pageCount
        }
      }
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