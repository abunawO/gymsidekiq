import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   day: DS.attr(),
   klassId: DS.attr(),
   startTimes: DS.attr(),
   klass: DS.belongsTo('klass', { async: false })
 });
