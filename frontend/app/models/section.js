import DS from 'ember-data';
import Model, { hasMany } from '@ember-data/model';

export default DS.Model.extend({
   title: DS.attr(),
   profileId: DS.attr(),
   profileName: DS.attr(),
   membersList: DS.attr(),
   profile: DS.belongsTo('profile')
 });
