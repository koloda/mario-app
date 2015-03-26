(function() {
    var ContactsApp = new Marionette.Application();

    /**
     * Models
     */

    ContactsApp.Contact = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    });

    ContactsApp.ContactsCollection = Backbone.Collection.extend({
        model: ContactsApp.Contact,
        comparator: 'firstName'
    });

    /**
     * Views
     */

    ContactsApp.ContactView = Marionette.ItemView.extend({
        template: '#contact-item-view',
        events: {
            'click a': 'editContact'
        },
        editContact: function() {
            var formView = new ContactsApp.ContactFormView({
                model: this.model
            });
            ContactsApp.mainRegion.show(formView);
        }
    });
    ContactsApp.ContactsCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'pricing-table',
        childView: ContactsApp.ContactView
    });
    ContactsApp.ContactFormView = Marionette.ItemView.extend({
        template: '#contact-form',
        events: {
            'click button': 'storeContact'
        },
        storeContact: function(e) {
            e.preventDefault();

            var fn = this.$el.find('#fn').val();
            var ln = this.$el.find('#ln').val();
            var ph = this.$el.find('#ph').val();
            var em = this.$el.find('#em').val();

            var c = new ContactsApp.Contact({
                firstName: fn,
                lastName: ln,
                phone: ph,
                email: em
            });

            ContactsApp.contacts.add(c);
            ContactsApp.contactsListView = new ContactsApp.ContactsCollectionView({
                collection: ContactsApp.contacts
            });

            ContactsApp.mainRegion.show(ContactsApp.contactsListView);
        }
    });

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


        ContactsApp.contactsListView = new ContactsApp.ContactsCollectionView({
            collection: ContactsApp.contacts
        });

        ContactsApp.mainRegion.show(ContactsApp.contactsListView);

    });

    ContactsApp.start();
})();
