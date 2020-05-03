import DS from 'ember-data';
import Model, { hasMany } from '@ember-data/model';

export default DS.Model.extend({
  email:  DS.attr('string'),
  password:  DS.attr('string'),
  profiles: DS.hasMany('profile'),
  user: DS.hasMany('user')
 });
