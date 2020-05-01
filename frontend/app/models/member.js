import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   membershipType: DS.attr(),
   firstName: DS.attr(),
   lastName: DS.attr(),
   profileId: DS.attr(),
   parentProfileName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   sectionIds: DS.attr(),
   registeredSections: DS.attr(),
   profile: DS.belongsTo('profile')
 });
