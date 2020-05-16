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
      this.set("selectedPlan", _plan);
      this.set("planInfo", {
        title: _plan.title,
      });
    },
    updatePlanTitle(title) {
      this.set("selectedPlan.title", title);
      this.get("selectedPlan")
        .save()
        .then((res) => {
          this.set("planInfo", {});
          this.get("flashMessages").success("Plan updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Plan not updated!");
        });
    },
  },
});
