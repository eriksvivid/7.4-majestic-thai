var $ = require('jquery');
var Backbone = require('backbone');


var OrderModel = Backbone.Model.extend({
});

var OrderCollection = Backbone.Collection.extend({
  model: OrderModel
});

module.exports = {"OrderCollection": OrderCollection};
