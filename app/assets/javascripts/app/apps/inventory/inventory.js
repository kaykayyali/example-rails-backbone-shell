var Inventory_View = Backbone.View.extend({

  tagName: "div",

  className: "inventory_view",
  
  id: "inventory",

  events: {

  },

  initialize: function() {
    Fast_Bindall(this);
    this.template = JST['app/templates/inventory'];
  },

  render: function() {
    this.$el.html(this.template);
  }

});

module.exports = Inventory_View;