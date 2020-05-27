import DS from 'ember-data';
import Model, { belongsTo, hasMany } from '@ember-data/model';

export default DS.Model.extend({
   title: DS.attr(),
   schedule: DS.attr(),
   profileId: DS.attr(),
   trainers: DS.attr(),
   members: DS.attr(),
   profile: DS.belongsTo('profile', { async: false }),
   attendances:  DS.hasMany('attendance',  { inverse: null })
 });
