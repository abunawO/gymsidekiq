import Ember from "ember";
import jQuery from "jquery";
import { isEmpty } from '@ember/utils';

export default Ember.Controller.extend({
  profilePlansList: [],
  planInfo: {},
  planKlasses: [],
  selectedPlan: null,
  profileklasses: [],
  profile: null,
  checkedklasses: [],
  availableProfileKlasses: [],
  hasAllClasses: null,
  hasNoClasses: null,

  refreshModel: function () {
    this.set("selectedPlan", null);
    this.set("planKlasses", null);
    this.set("hasAllClasses", null);
    this.set("hasNoClasses", null);
    this.set("availableProfileKlasses", null);
    this.get('checkedklasses').forEach((element)=>{element.prop('checked',false);});
  },
  getAvailableKlasses: function(plan){
    if (plan.get('classes')){
      var currenKlassIds = plan.get('klassIds').toString().split(',');
      var availableKlasses = [];
      this.get('profileklasses').forEach((klass, i) => {
        var hasClasss = plan.get('classes').findBy('title', klass.title);
        if(isEmpty(hasClasss)){
          availableKlasses.push(klass);
        }
      });
      return availableKlasses;
    }else {
      return this.get('profileklasses');
    }

  },
  getSelectedKlassIds: function(){
    var currenKlassIds = []
    $('input[type=checkbox]:checked').each(function () {
      var status = (this.checked ? $(this).val() : "");
      var id = $(this).attr("id");
      currenKlassIds.push(id);
    });
    return currenKlassIds.toString();
  },

  actions: {
    selectPlan(_plan) {
      this.set("planKlasses", _plan.get("classes"));
      this.set("selectedPlan", _plan);
      this.set("availableProfileKlasses", this.getAvailableKlasses(_plan));
      this.set('hasAllClasses', isEmpty(this.getAvailableKlasses(_plan)));
      this.set('hasNoClasses',  isEmpty(_plan.get('classes')));
      document.getElementById("plan-form").style.display = "block";
    },
    updatePlan(selectedPlan) {
      selectedPlan.set("klassIds", this.getSelectedKlassIds());
      selectedPlan
        .save()
        .then((res) => {
          this.get('selectedPlan').reload();
          window.scrollTo(0, 0);
          this.refreshModel();
          this.get("flashMessages").success("Plan updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Plan not updated!");
        });
    },
    createNewPlan() {
      document.body.style.overflow = "auto";
      this.transitionToRoute("user.profile.plans.new");
    },
    deletePlan(selectedPlan) {
      selectedPlan.destroyRecord().then(
        () => {
          this.refreshModel();
          window.scrollTo(0, 0);
          this.get("flashMessages").success(
            "The Plan was has been deleted successfully."
          );
        },
        () => {
          flashMessages.danger("There was an error deleting the Plan.");
        }
      );
    },
  },
});
