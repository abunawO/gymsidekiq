import Controller from "@ember/controller";
import Ember from "ember";

export default Ember.Controller.extend({
  profileTrainersList: [],
  selectedTrainer: null,
  profile: null,
  filesArray: [],
  actions: {
    selectTrainer(_trainer) {
      this.set("selectedTrainer", _trainer);
      document.getElementById("trainers-form").style.display = "block";
    },
    createNewTrainer(title) {
      this.transitionToRoute("user.profile.trainers.new");
    },
    someAction(filesArray) {
      this.set("filesArray", filesArray);
    },
  },
});
