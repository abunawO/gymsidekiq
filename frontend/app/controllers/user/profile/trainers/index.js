import Controller from "@ember/controller";
import Ember from "ember";

export default Ember.Controller.extend({
  profileTrainersList: [],
  selectedTrainer: null,
  profile: null,
  filesArray: [],
  TrainersfilesArray: [],

  refreshModel: function(){
    this.set("selectedTrainer", null);
    this.set("filesArray", []);
    document.getElementById("trainer-picture").value = null;
  },

  actions: {
    selectTrainer(_trainer) {
      this.refreshModel();
      this.set("selectedTrainer", _trainer);
      document.getElementById("trainers-form").style.display = "block";
    },
    createNewTrainer(title) {
      this.transitionToRoute("user.profile.trainers.new");
    },
    setImage(filesArray) {
      this.set("filesArray", filesArray);
    },
    updateTrainer(trainer) {
      trainer.set('image', this.get('filesArray')[0]);
      trainer.save()
        .then((res) => {
          this.refreshModel();
          this.get("flashMessages").success("Trainer updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Trainer not updated!");
        });
    },
    deleteTrainer(selectedTrainer) {
      selectedTrainer.destroyRecord().then(() => {
        this.refreshModel();
        this.get('flashMessages').success('The Trainer was has been deleted successfully.');
      }, () => {
        flashMessages.danger('There was an error deleting the Trainer.');
      });
    }
  }
});
