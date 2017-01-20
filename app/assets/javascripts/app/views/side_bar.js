var App_List_View = require('./app_list_view');
var Side_Bar_View = Backbone.View.extend({

  tagName: "section",

  className: "column-4 tablet-column-2 phone-hide",
  
  id: "side_bar",

  events: {

  },

  initialize: function(options) {
    if (!options){
        console.warn("NO OPTIONS FOUND");
        return;
    }
    this.options = options;
    Fast_Bindall(this);
    this.template = JST['app/templates/side_bar'];
  },

  render: function() {
    this.$el.html(this.template);
    this.render_app_list();
  },
  render_app_list: function() {
    this.app_list_view = new App_List_View();
    this.app_list_view.render();
    this.$el.find('#side-bar-list-target').append(this.app_list_view.el);
  }

});

module.exports = Side_Bar_View;