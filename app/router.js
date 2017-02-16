
module.exports = app => {
  app.get('/',app.controller.list.list);
}