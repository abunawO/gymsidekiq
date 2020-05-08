import DS from 'ember-data';
import Model, { belongsTo, hasMany } from '@ember-data/model';

export default DS.Model.extend({
   firstName: DS.attr(),
   lastName: DS.attr(),
   email: DS.attr(),
   address: DS.attr(),
   city: DS.attr(),
   state: DS.attr(),
   zip: DS.attr(),
   phone: DS.attr(),
   profile: DS.belongsTo('profile'),
   klasses: DS.hasMany('klass', { inverse: null }),
   members: DS.hasMany('member', { inverse: null })
 });
