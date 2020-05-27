import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   profileId: DS.attr(),
   klassId: DS.attr(),
   memberId: DS.attr(),
   checkedInAt: DS.attr(),
   profile: DS.belongsTo('profile', { async: false }),
   checkInDateString: Ember.computed('checkedInAt', function(){
    return new Date(this.get('checkedInAt'))
  }),
  member: Ember.computed('memberId',function(){
   return this.store.find('member', this.get('memberId'));
  })
 });
