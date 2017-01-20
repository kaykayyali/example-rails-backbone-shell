var Bookings_View = Backbone.View.extend({

  tagName: "section",

  className: "bookings_view",
  
  id: "booking",

  events: {

  },

  initialize: function() {
    Fast_Bindall(this);
  },

  render: function() {
    this.$el.html("Bookings view");
  }

});

module.exports = Bookings_View;