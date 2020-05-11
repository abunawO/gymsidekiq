import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   title:    DS.attr(),
   klassIds: DS.attr(),
   profile:  DS.belongsTo('profile')
 });
