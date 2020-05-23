import DS from 'ember-data';
import Model, { belongsTo, has_many } from '@ember-data/model';

export default DS.Model.extend({
   title: DS.attr(),
   schedule: DS.attr(),
   profileId: DS.attr(),
   trainers: DS.attr(),
   members: DS.attr(),
   profile: DS.belongsTo('profile', { async: false }),
   KlassSchedules:  DS.hasMany('KlassSchedule',   { inverse: null })
 });
