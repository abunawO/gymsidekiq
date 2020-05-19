import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
  email:  DS.attr('string'),
  password: DS.attr('string'),
  profileId: DS.attr('string')
 });
