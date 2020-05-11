import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profilePlansList: [],
  profile: null,

  actions: {
    someAction() {
      //debugger
      this.transitionToRoute('profile.members.new')
    }
  }
});
