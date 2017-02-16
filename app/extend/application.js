const MONGODB = Symbol('Application#mongodb');

const mongoose = require('mongoose');
module.exports = {
  get mongodb() {
    if (!this[MONGODB]) {
      this.mongoUrl = this.config.mongoUrl;
      this[MONGODB] = mongoose.connect(this.mongoUrl);
    }
    return this[MONGODB];
  },
};