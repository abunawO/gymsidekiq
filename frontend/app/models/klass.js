import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   title: DS.attr(),
   schedule: DS.attr(),
   profileId: DS.attr(),
   profile: DS.belongsTo('profile'),
   trainer: DS.belongsTo('trainer'),
   member: DS.belongsTo('member')

 });
