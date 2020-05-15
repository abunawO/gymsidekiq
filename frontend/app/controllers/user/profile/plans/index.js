import Ember from "ember";
import jQuery from "jquery";

export default Ember.Controller.extend({
  profilePlansList: [],
  planInfo: {},
  planKlasses: [],
  selectedPlan: null,
  // unknowns
  profile: null,

  actions: {
    selectPlan(_plan) {
      this.set("planKlasses", _plan.classes);
      this.set("selectedPlan", _plan);
      this.set("planInfo", {
        title: _plan.title,
      });
    },
    // unknowns
    someAction() {
      //debugger
      this.transitionToRoute("profile.members.new");
    },
  },
});
