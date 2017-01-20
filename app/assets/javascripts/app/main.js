// Secondary Views must be required to be visible, If this is a global item, define it by requiring into app.js

var Side_Bar_View = require('./views/side_bar.js');
var Interface_View = require('./views/interface.js');

var Main_View = Backbone.View.extend({

  tagName: "div",
  className: "grid-container main",
  id: "main",
  events: {
  },

  initialize: function() {
    Fast_Bindall(this);
  },

  render: function() {
    this.remove_loading();
    var options = {
      parent_view: this
    };
    this.side_bar_view = new Side_Bar_View(options);
    this.interface_view = new Interface_View(options);
    this.side_bar_view.render();
    this.interface_view.render();
    this.$el.append(this.side_bar_view.el);
    this.$el.append(this.interface_view.el);
    Global_View_Cache["SideBar"] = this.side_bar_view;
    Global_View_Cache["Interface"] = this.interface_view;
  },

  remove_loading: function() {
    $('#loading-overlay').animate({
      opacity: 0
    }, 750, function() {
      $('#loading-overlay').remove();
    });
  }

});

module.exports = Main_View;