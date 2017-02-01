var Bookings_View = Backbone.View.extend({

  tagName: "div",

  className: "bookings_view",
  
  id: "bookings",

  events: {

  },

  initialize: function() {
    Fast_Bindall(this);
    this.template = JST['app/templates/bookings'];
  },

  render: function() {
    this.$el.html(this.template);
  }

});

module.exports = Bookings_View;