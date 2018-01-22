var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("resolutions", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("resolutions", [
      "resolution_name", "accomplished"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("resolutions", {
      accomplished: true
    }, condition, cb);
  }
};

module.exports = burger;
