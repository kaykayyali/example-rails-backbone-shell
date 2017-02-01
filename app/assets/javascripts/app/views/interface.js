var Dashboard_View = require('./dashboard')
var Interface_View = Backbone.View.extend({

  tagName: "div",

  className: "column-20 tablet-column-10 phone-column-6",

  id: "interface",

  events: {
    "app_change": "handle_app_change"
  },

  initialize: function(options) {
    if (!options){
        console.warn("NO OPTIONS FOUND");
        return;
    }
    this.options = options;
    Fast_Bindall(this);
    this.template = JST['app/templates/interface'];
  },

  render: function() {
    this.$el.html(this.template);
    // If interface has not recieved an app to select, render dashboard which should render them all.
    if (!this.selected_app) {
      this.render_dashboard();
    }
  },
  handle_app_change: function(event, app) {
    console.log("Successful Change app event!!!", app);
    this.render_app(app);
  },
  render_app: function(app) {
    this.current_app = app;
    var app = new app.root_view();
    app.render();
    this.$el.html(app.el);
  },
  render_dashboard: function() {
    this.dashboard = new Dashboard_View();
    this.dashboard.render();
    this.$el.append(this.dashboard.el);
  }
});

module.exports = Interface_View;