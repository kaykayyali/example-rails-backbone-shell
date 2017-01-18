var Backbone = require('backbone');
var Side_Bar_View = Backbone.View.extend({

  tagName: "section",
  
  id: "side_bar",

  events: {

  },

  initialize: function() {
    this.template = JST['app/templates/side_bar'];
  },

  render: function() {
    this.$el.html(this.template);
  }

});

module.exports = Side_Bar_View;