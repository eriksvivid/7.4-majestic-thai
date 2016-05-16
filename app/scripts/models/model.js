var $ = require('jquery');
var Backbone = require('backbone');


var Menu = Backbone.Model.extend({
  idAttribute: 'cid'
});

var MenuCollection = Backbone.Collection.extend({
  model: Menu,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/erik',
  parse: function(data){
    return data;
  }
});

module.exports = {
  Menu: Menu,
  MenuCollection: MenuCollection
};
