import DS from 'ember-data';
import Model, { belongsTo } from '@ember-data/model';

export default DS.Model.extend({
   profileId: DS.attr(),
   klassId: DS.attr(),
   memberId: DS.attr(),
   checkedInAt: DS.attr(),
   profile: DS.belongsTo('profile', { async: false }),
   checkInTime: Ember.computed('checkedInAt', function(){
    return new Date(this.get('checkedInAt')).toLocaleTimeString()
   }),
  member: Ember.computed('memberId',function(){
   return this.store.find('member', this.get('memberId'));
  }),
  isTodaysCheckin: Ember.computed('memberId',function(){
   var currentDate = new Date
   return new Date(this.get('checkedInAt')).getDate() >= currentDate.getDate()
  })
});
