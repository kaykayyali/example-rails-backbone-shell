var Backbone = require('backbone');
var Interface_View = Backbone.View.extend({

  tagName: "section",

  id: "interface",

  events: {

  },

  initialize: function() {
    this.template = JST['app/templates/interface'];
  },

  render: function() {
    this.$el.html(this.template);
  }

});

module.exports = Interface_View;