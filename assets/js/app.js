var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region",
  dialogRegion: "#dialog-region"
});

ContactManager.navigate = function (route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function () {
  return Backbone.history.fragment;
};

ContactManager.on("initialize:after", function () {
  if (Backbone.history) {
    Backbone.history.start();
  }

  if (ContactManager.getCurrentRoute() === "") {
    ContactManager.navigate("contacts");
    ContactManager.trigger("contacts:list");
  }
});
