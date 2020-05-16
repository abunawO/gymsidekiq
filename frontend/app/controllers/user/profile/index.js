import Controller from "@ember/controller";
import Ember from "ember";

export default Ember.Controller.extend({
  userProfiles: [],
  actions: {
    createProfile() {
      this.transitionToRoute("user.profile.new");
    }
  }
});
