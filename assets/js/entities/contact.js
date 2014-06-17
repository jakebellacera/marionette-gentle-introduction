ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {
  Entities.Contact = Backbone.Model.extend({});

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: "firstName"
  });

  var contacts;
  var initializeContacts = function () {
    contacts = new Entities.ContactCollection([
      {
        firstName: "Bob",
        lastName: "Brigham",
        phoneNumber: "555-0163"
      },
      {
        firstName: "Alice",
        lastName: "Arten",
        phoneNumber: "555-0184"
      },
      {
        firstName: "Charlie",
        lastName: "Campbell",
        phoneNumber: "555-0128"
      }
    ]);
  };

  var API = {
    getContactEntities: function () {
      if (contacts === undefined) {
        initializeContacts();
      }
      return contacts;
    }
  };

  ContactManager.reqres.setHandler("contact:entities", function () {
    return API.getContactEntities();
  });
});
