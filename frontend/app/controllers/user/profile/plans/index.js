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
      this.set("planKlasses", _plan.get('classes'));
      this.set("selectedPlan", _plan);
      this.set("planInfo", {
        title: _plan.get('title'),
        price: _plan.get('price'),
      });
      document.getElementById("plan-form").style.display = "block";
    },
    updatePlan(title, price) {
      this.set("selectedPlan.title", title);
      this.set("selectedPlan.price", price);
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
    createNewPlan() {
      this.transitionToRoute("user.profile.plans.new");
    },
  },
});
