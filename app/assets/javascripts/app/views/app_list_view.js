var App_List_Item_View = require('./app_list_item_view');
var App_List_View = Backbone.View.extend({

  tagName: "ul",

  className: "app_list list-plain",
  
  id: "app_list_view",

  events: {
    'change_selected' : "handle_change_selected_app"
  },

  initialize: function() {
    Fast_Bindall(this);
    this.template = JST['app/templates/app_list_view'];
    this.rendered_apps = {};
  },

  render: function() {
    this.$el.html(this.template);
    Global_View_Cache["Side_Bar_App_List"] = this;
    this.render_apps_list();
  },
  deselect_app: function() {
    if (this.selected_app) {
      this.selected_app.$el.removeClass('selected');
    }
  },
  handle_change_selected_app: function(event, model) {
    var candidate = this.rendered_apps[model.name];
    if (candidate) {
      this.select_app(candidate);
    }
  },

  handle_app_change: function() {
    var self = this;
    if (Global_View_Cache && Global_View_Cache["Interface"]) {
      console.log("Sending interface app change request")
      Global_View_Cache["Interface"].$el.trigger('app_change', self.selected_app.model);
    }
    else {
      console.error("Failed to change app")
    }
  },

  render_apps_list: function() {
    var self = this;
    _.each(Apps, self.render_app_list_item);
  },

  // Cycle through Global apps and render a new list item with the app attached
  render_app_list_item: function(app) {
    if (!this.validate_app(app)) {
       console.warn("Failed to validate app:", app);
      return;
    }
      var options = {
        model: app,
        parent_view: this
      }
    var new_app_list_item = new App_List_Item_View(options);
    new_app_list_item.render();
    this.$el.append(new_app_list_item.el);
    this.rendered_apps[app.name] = new_app_list_item;
  },

  select_app: function(app) {
    if (this.selected_app) {
      this.deselect_app();
    }
    this.selected_app = app;
    this.selected_app.$el.addClass('selected');
    this.handle_app_change();
  },

  validate_app: function(app) {
    // Ensure that the app has the necessary required attributes before proceeding.
    return (app && app.name && app.root_view);
  }
});

module.exports = App_List_View;