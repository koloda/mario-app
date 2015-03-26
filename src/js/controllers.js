ContactsApp.module('Controllers', function(Controllers, ContactsApp, Backbone, Marionette, $, _ ){
	Controllers.listContacts = function(){
		var contacts = ContactsApp.request('contact:entities');

	    var contactsListView = new ContactsApp.Views.List({
	        collection: contacts
	    });

	    contactsListView.on('childview:contact:delete', function(childView, model){
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this contact!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false
            },
            function() {
                contacts.remove(model);
                swal("Deleted!", "Your contact has been deleted.", "success");
            });
	    });

	    ContactsApp.mainRegion.show(contactsListView);
	};
});