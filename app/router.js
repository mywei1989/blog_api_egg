
module.exports = app => {
  app.get('/',app.controller.list.list);
  //app.redirect('/page/:page','/page/:page/');
  app.get('/page/:page/',app.controller.list.page);
  app.get('/tag/:tag/',app.controller.list.tag);
}