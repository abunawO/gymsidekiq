import Ember from 'ember';
import jQuery from 'jquery'
const { service } = Ember.inject;

export default Ember.Controller.extend({
  profileMembersList: [],
  profile: null,

  actions: {
    someAction() {
      //debugger
      this.transitionToRoute('profile.members.new')
    }
  }
});
