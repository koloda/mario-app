ContactsApp.module('Entities', function(Entities, ContactsApp, Backbone, Marionette, $, _) 
{
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
});