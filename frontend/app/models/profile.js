import DS from 'ember-data';
import Model, { belongsTo, hasMany } from '@ember-data/model';

export default DS.Model.extend({
  //this.get('profile.members._objects') to fetch members list get('members._objects.firstObject
   profileName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   members:  DS.hasMany('member', { inverse: null }),
   trainers: DS.hasMany('trainer', { inverse: null }),
   klasses:  DS.hasMany('klass', { inverse: null }),
   user:     DS.belongsTo('user', { async: true })
 });
