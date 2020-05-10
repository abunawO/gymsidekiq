import Ember from 'ember';
import jQuery from 'jquery'
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  profileMembersList: [],
  userProfile: Ember.inject.controller('profile.index'),

  actions: {
    someAction() {
      //debugger
      this.transitionToRoute('profile.members.new')
    }
  }
});
