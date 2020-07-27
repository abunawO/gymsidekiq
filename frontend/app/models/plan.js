import DS from 'ember-data';
import Model, { belongsTo, hasMany } from '@ember-data/model';

export default DS.Model.extend({
   title:     DS.attr(),
   klassIds:  DS.attr(),
   price:     DS.attr(),
   profileId:  DS.attr(),
   profile:  DS.belongsTo('profile'),
   klasses: DS.hasMany("klass", { inverse: null }),
   members: DS.hasMany("member", { inverse: null })
 });
