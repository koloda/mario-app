ContactsApp.module('Entities', function(Entities, ContactsApp, Backbone, Marionette, $, _ ){
	/**
	 * Entities definition
	 */
	Entities.Contact = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    });

    Entities.ContactsCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        comparator: 'firstName'
    });

    /**
     * Initialize contacts
     */
    var contacts;
    var initializeContacts = function(){
    	contacts = new ContactsApp.Entities.ContactsCollection([
	    	{
	    		id: 1,
	            firstName: "Bob",
	            lastName: "Brigham",
	            phoneNumber: "555-0163"
	        }, 
	        {
	        	id: 2,
	            firstName: "Alice",
	            lastName: "Arten",
	            phoneNumber: "555-0184"
	        }, 
	        {
	        	id: 3,
	            firstName: "Charlie",
	            lastName: "Campbell",
	            phoneNumber: "555-0129"
	        }
        ]);
    };

    var API = {
    	getContactsEntities : function(){
    		if ( contacts == undefined )
    			initializeContacts();

    		return contacts;
    	}
    };

    ContactsApp.reqres.setHandler('contact:entities', function(){
    	return API.getContactsEntities();
    });

});