ContactsApp.module('Views', function(Views, ContactsApp, Backbone, Marionette, $, _) 
{
    Views.ContactView = Marionette.ItemView.extend({
        template: '#contact-item-view',
    });

    Views.ContactsCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'pricing-table',
        childView: Views.ContactView
    });

    Views.ContactFormView = Marionette.ItemView.extend({
        template: '#contact-form',
    });

});
