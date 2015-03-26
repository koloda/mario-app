var ContactsApp = new Marionette.Application();

ContactsApp.addRegions({
    mainRegion: '#main-region'
});

ContactsApp.on('start', function(e) {
    ContactsApp.Controllers.listContacts();
});