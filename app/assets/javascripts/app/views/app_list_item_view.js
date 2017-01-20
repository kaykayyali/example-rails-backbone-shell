var App_List_Item_View = Backbone.View.extend({

  tagName: "li",

  className: "app_list_item_view  medium_transition text-center font-size-2",

  events: {
    'click': "handle_select"
  },

  initialize: function(options) {
    if (!options){
        console.warn("NO OPTIONS FOUND");
        return;
    }
    this.options = options;
    Fast_Bindall(this);
    this.template = JST['app/templates/app_list_item_view'];
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },
  handle_select: function(event) {
    this.options.parent_view.$el.trigger('change_selected', this.model);
  }

});

module.exports = App_List_Item_View;