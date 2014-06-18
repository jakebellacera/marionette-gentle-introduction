ContactManager.module("Common.Views", function (Views, ContactManager, Backbone, Marionette, $, _) {
  Views.Loading = Marionette.ItemView.extend({
    template: "#loading-view",
    onShow: function () {
      $("#spinner").spin();
    }
  })
})
