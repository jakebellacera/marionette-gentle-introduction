ContactManager.module("ContactsApp.Edit", function (Edit, ContactManager, Backbone, Marionette, $, _) {
  Edit.Contact = ContactManager.ContactsApp.Common.Views.Form.extend({
    template: "#contact-form",

    events: {
      "click button.js-submit": "submitClicked"
    },

    initialize: function () {
      this.title = "Edit " + this.model.get("firstName") + " " + this.model.get("lastName");
    },

    onRender: function () {
      if (this.options.generateTitle) {
        var $title = $("<h1>", { text: this.title });
        this.$el.prepend($title);
      }
    }
  });
});
