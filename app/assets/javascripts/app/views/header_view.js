var Header_View = Backbone.View.extend({

  tagName: "div",

  className: "text-center avenir-bold",
  
  id: "header_view",

  events: {

  },

  initialize: function(options) {
    this.options = options || {};
    Fast_Bindall(this);
    this.template = JST['app/templates/header'];
  },

  render: function() {

    this.$el.html(this.template(this.options));
  }

});

module.exports = Header_View;