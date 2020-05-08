import DS from 'ember-data';
import Model, { belongsTo, hasMany } from '@ember-data/model';

export default DS.Model.extend({
   membershipType: DS.attr(),
   firstName: DS.attr(),
   fullName: DS.attr(),
   lastName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   profile:  DS.belongsTo('profile'),
   trainers: DS.hasMany('trainer', { inverse: null }),
   klasses:  DS.hasMany('klass', { inverse: null })
 });
