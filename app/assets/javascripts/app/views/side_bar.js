var App_List_View = require('./app_list_view');
var Header_View = require('./header_view');
var Side_Bar_View = Backbone.View.extend({

  tagName: "div",

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
    this.rendered_views = [];
  },

  render: function() {
    this.$el.html(this.template);
    this.$append_target = this.$el.find('#side-bar-list-target');
    Async.series([
      this.render_header,
      this.render_app_list
    ],
    function(error, results) {
      if (error) {
        console.warn(error);
        // Throw a client error here?
        alert("Failed to initialize side bar.", error);
        return;
      }
      console.warn("SIDE BAR LOADED");
    });
  },
  render_app_list: function(callback) {
    this.app_list_view = new App_List_View();
    this.app_list_view.render();
    this.rendered_views.push(this.app_list_view);
    this.$append_target.append(this.app_list_view.el);
    Async.nextTick(callback);
  },
  render_header: function(callback) {
    var options = {
      company_name: "Soccer App"
    };
    this.header_view = new Header_View(options);
    this.header_view.render();
    this.rendered_views.push(this.header_view);
    this.$append_target.append(this.header_view.el);
    Async.nextTick(callback);
  }

});

module.exports = Side_Bar_View;