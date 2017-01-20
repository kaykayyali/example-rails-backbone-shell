var Dashboard_View = Backbone.View.extend({

  tagName: "div",

  className: "dashboard_view",

  id: "dashboard",

  events: {

  },

  initialize: function() {
    Fast_Bindall(this);
    this.template = JST['app/templates/dashboard'];
  },

  render: function() {
    this.$el.html(this.template);
  }

});

module.exports = Dashboard_View;