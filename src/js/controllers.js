ContactsApp.module('Controllers', function(Controllers, ContactsApp, Backbone, Marionette, $, _) {
    Controllers.listContacts = function() {
        var contacts = ContactsApp.request('contact:entities');

        var contactsListView = new ContactsApp.Views.List({
            collection: contacts
        });

        contactsListView.on('childview:contact:delete', function(childView, model) {
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this contact!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: true
                },
                function() {
                    contacts.remove(model);
                    // swal("Deleted!", "Your contact has been deleted.", "success");
                });
        });

        contactsListView.on('childView:contact:show', function(childView, model) {
            ContactsApp.Controllers.show(model);
        });

        ContactsApp.mainRegion.show(contactsListView);
    };

    Controllers.show = function(model) {
        console.log(model);
    };
});
