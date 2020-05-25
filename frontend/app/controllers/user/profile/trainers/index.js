import Controller from "@ember/controller";
import Ember from "ember";
import { isEmpty } from '@ember/utils';

export default Ember.Controller.extend({
  profileTrainersList: [],
  selectedTrainer: null,
  profile: null,
  filesArray: [],
  TrainersfilesArray: [],
  profileklasses: [],
  klassIds: [],
  checkedklasses: [],
  availableProfileKlasses: [],
  hasAllClasses: true,
  hasNoClasses: true,

  refreshModel: function () {
    this.set("selectedTrainer", null);
    this.set("filesArray", []);
    this.set('klassIds', []),
    this.set('availableProfileKlasses', []),
    this.get('checkedklasses').forEach((element)=>{element.prop('checked',false);});
    document.getElementById("trainer-picture").value = null;
  },
  getSelectedKlassIds: function(){
    var currenKlassIds = []
    $('input[type=checkbox]:checked').each(function () {
      var status = (this.checked ? $(this).val() : "");
      var id = $(this).attr("name");
      currenKlassIds.push(id);
    });
    return currenKlassIds.toString();
  },
  getAvailableKlasses: function(trainer){
    var currenKlassIds = trainer.get('klassIds').toString().split(',');
    var availableKlasses = [];
    this.get('profileklasses').forEach((klass, i) => {
      var hasClasss = trainer.get('classes').findBy('title', klass.title);
      if(isEmpty(hasClasss)){
        availableKlasses.push(klass);
      }
    });
    return availableKlasses;
  },

  actions: {
    selectTrainer(_trainer) {
      this.refreshModel();
      this.set("selectedTrainer", _trainer);
      this.set("availableProfileKlasses", []);
      this.set('hasAllClasses', isEmpty(this.getAvailableKlasses(_trainer)));
      this.set('hasNoClasses',  isEmpty(_trainer.get('classes')));
      this.set("availableProfileKlasses", this.getAvailableKlasses(_trainer));
      document.getElementById("trainers-form").style.display = "block";
    },
    createNewTrainer(title) {
      document.body.style.overflow = "auto";
      this.transitionToRoute("user.profile.trainers.new");
    },
    setImage(filesArray) {
      this.set("filesArray", filesArray);
    },
    updateTrainer(trainer) {
      if(!isEmpty(this.get('filesArray'))){trainer.set('image', this.get('filesArray')[0]);}
      trainer.set("klassIds", this.getSelectedKlassIds());
      trainer
        .save()
        .then((res) => {
          this.get('selectedTrainer').reload();
          this.refreshModel();
          window.scrollTo(0, 0);
          this.get("flashMessages").success("Trainer updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Trainer not updated!");
        });
    },
    deleteTrainer(selectedTrainer) {
      selectedTrainer.destroyRecord().then(
        () => {
          this.refreshModel();
          this.get("flashMessages").success(
            "The Trainer was has been deleted successfully."
          );
        },
        () => {
          flashMessages.danger("There was an error deleting the Trainer.");
        }
      );
    },
  },
});
