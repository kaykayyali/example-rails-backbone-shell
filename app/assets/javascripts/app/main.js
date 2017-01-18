var Backbone = require('backbone');
var Side_Bar_View = require('./views/side_bar.js');
var Interface_View = require('./views/interface.js');
var Main_View = Backbone.View.extend({

  tagName: "div",
  events: {

  },

  initialize: function() {
  },

  render: function() {
    this.side_bar_view = new Side_Bar_View();
    this.interface_view = new Interface_View();
    this.side_bar_view.render();
    this.interface_view.render();
    this.$el.append(this.side_bar_view.el);
    this.$el.append(this.interface_view.el);
  }

});

module.exports = Main_View;