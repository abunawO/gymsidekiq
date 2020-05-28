import Controller from "@ember/controller";
import Ember from "ember";

export default Ember.Controller.extend({
  profile: null,
  profileKlasses: [],
  filesArray: [],


  formattedDate: function() {
    return moment().format('LL');
  }.property(''),

  actions: {}
});
