import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default DS.Model.extend({
   firstName: DS.attr(),
   lastName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   image: DS.attr('file'),
   classes: DS.attr(),
   klassIds: DS.attr(),
   profileId: DS.attr(),
   profile: DS.belongsTo('profile'),


   fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
   })

 });
