ContactsApp.module('Controllers', function(Controllers, ContactsApp, Backbone, Marionette, $, _ ){
	Controllers.listContacts = function(){
		var contacts = ContactsApp.request('contact:entities');

	    ContactsApp.contactsListView = new ContactsApp.Views.ContactsCollectionView({
	        collection: contacts
	    });

	    ContactsApp.mainRegion.show(ContactsApp.contactsListView);
	};
});