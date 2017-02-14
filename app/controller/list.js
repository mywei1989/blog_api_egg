'use strict';
const async = require('async');

module.exports = app => {
  class ListController extends app.Controller {
    * index(){
      this.ctx.body ={
        name: 'aaaa'
      };
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