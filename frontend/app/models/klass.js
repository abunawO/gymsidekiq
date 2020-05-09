import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   title: DS.attr(),
   schedule: DS.attr(),
   profileId: DS.attr(),
   isParent: DS.attr(),
   trainers: DS.attr(),
   members: DS.attr(),
   profile: DS.belongsTo('profile', { async: true }),
   trainer: DS.belongsTo('trainer', { async: true }),
   member: DS.belongsTo('member',   { async: true })
 });
