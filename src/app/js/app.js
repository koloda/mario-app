(function() {
    var ContactsApp = new Marionette.Application();

    ContactsApp.addRegions({
        mainRegion: '#main-region'
    });

    ContactsApp.on('start', function(e) {
        console.log(e);

        ContactsApp.contacts = new ContactsApp.ContactsCollection([{
            firstName: "Bob",
            lastName: "Brigham",
            phoneNumber: "555-0163"
        }, {
            firstName: "Alice",
            lastName: "Arten",
            phoneNumber: "555-0184"
        }, {
            firstName: "Charlie",
            lastName: "Campbell",
            phoneNumber: "555-0129"
        }]);


        ContactsApp.contactsListView = new ContactsApp.Views.ContactsCollectionView({
            collection: ContactsApp.contacts
        });

        ContactsApp.mainRegion.show(ContactsApp.contactsListView);

    });

    ContactsApp.start();
})();
