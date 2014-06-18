ContactManager.module("Common.Views", function (Views, ContactManager, Backbone, Marionette, $, _) {
  Views.Loading = Marionette.ItemView.extend({
    template: "#loading-view",
    initialize: function (options) {
        var options = options || {};
        this.title = options.title || "Loading Data";
        this.message = options.message || "Please wait, data is loading.";
    },
    serializeData: function () {
      return {
        title: this.title,
        message: this.message
      }
    },
    onShow: function () {
      $("#spinner").spin();
    }
  })
})
