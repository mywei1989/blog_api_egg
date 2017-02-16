
module.exports = app => {
  app.get('/',app.controller.list.list);
  app.get('/page/:page/',app.controller.list.page);
  app.get('/tag/:tag/',app.controller.tag.list);
  app.get('/tag/:tag/page/:page/',app.controller.tag.page);
  app.get('/:year/:month/',app.controller.archive.list);
  app.get('/:year/:month/page/:page/',app.controller.archive.page);
  app.get('/:year/:month/:name',app.controller.article.article);
}