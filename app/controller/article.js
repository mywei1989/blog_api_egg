'use strict';


module.exports = app => {
  class ArticleController extends app.Controller {
    * article(){
      const ctx = this.ctx;
      
      const year = this.ctx.params.year || '';
      const month = this.ctx.params.month || '';
      const name = this.ctx.params.name || '';
      const getArticle = yield ctx.service.article.getArticle(year,month,name);
      this.ctx.body = {
        article:getArticle
      }
    }
  }
  return ArticleController;
}
