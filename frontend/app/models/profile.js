import DS from 'ember-data';
import Model, { hasMany } from '@ember-data/model';

export default DS.Model.extend({
  //this.get('profile.members._objects') to fetch members list get('members._objects.firstObject
   profileName: DS.attr(),
   email: DS.attr(),
   userId: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   membersList: DS.attr(),
   sectionsList: DS.attr(),
   user: DS.belongsTo('user')
 });
