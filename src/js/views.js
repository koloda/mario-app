ContactsApp.module('Views', function(Views, ContactsApp, Backbone, Marionette, $, _) {
    Views.Contact = Marionette.ItemView.extend({
        template: '#contact-item-view',
        tagName: 'tr',
        events: {
            'click a.js-delete': 'deleteItem',
        },
        deleteItem: function() {
            this.trigger('contact:delete', this.model);
        }
    });

    Views.List = Marionette.CompositeView.extend({
        tagName: 'table',
        // className : '',
        template: '#contact-list',
        childView: Views.Contact,
        childViewContainer: 'tbody'
    });

    Views.ContactFormView = Marionette.ItemView.extend({
        template: '#contact-form',
    });

});
