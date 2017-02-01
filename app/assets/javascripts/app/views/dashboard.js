var Dashboard_View = Backbone.View.extend({

  tagName: "div",

  className: "dashboard_view block-group block-group-3-up tablet-block-group-2-up phone-block-group-1-up",

  id: "dashboard",

  events: {
    'click .app-mini-view': 'handle_app_click'
  },

  initialize: function() {
    Fast_Bindall(this);
    this.template = JST['app/templates/dashboard'];
    this.rendered_apps = {};
  },

  render: function() {
    this.$el.html(this.template); 
    this.render_apps();
  },
  handle_app_click: function(event) {
    if (!event || !event.currentTarget) {
      return;
    }
    var app_id = event.currentTarget.id;
    if (this.rendered_apps[app_id]) {
      var self = this;
      if (Global_View_Cache && Global_View_Cache["Interface"]) {
        console.log("Sending interface app change request");
        Global_View_Cache["Side_Bar_App_List"].$el.trigger("change_selected", this.rendered_apps[app_id].app);
      }
      else {
        console.error("Failed to change app");
      }
    }
  },
  render_apps: function() {
    var self = this;
    _.each(Apps, self.render_app);
  },
  render_app: function(app) {
    if (!this.validate_app(app)) {
       console.warn("Failed to validate app:", app);
      return;
    }
    console.log("Rendering", app);
    var options = {
      parent_view: this
    }
    var app_id = app.name.toLowerCase();
    this.rendered_apps[app_id] = {
      app: app,
      view: new app.root_view()
    }
    this.rendered_apps[app_id].view.render();
    this.rendered_apps[app_id].view.$el.addClass('app-mini-view fast_transition');
    this.$el.append(this.rendered_apps[app_id].view.el);
  },
  validate_app: function(app) {
    // Ensure that the app has the necessary required attributes before proceeding.
    return (app && app.name && app.root_view);
  }

});

module.exports = Dashboard_View;