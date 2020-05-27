import Controller from "@ember/controller";
import Ember from "ember";

export default Ember.Controller.extend({
  userProfiles: [],
  profileTrainers: [],
  profileKlasses: [],
  profileMembers: [],
  filesArray: [],


  formattedDate: function() {
    return moment().format('LL');
  }.property(''),

  actions: {}
});
