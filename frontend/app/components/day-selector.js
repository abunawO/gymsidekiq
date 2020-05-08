import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,

  didReceiveAttrs(){
    //1
  },
  didInsertElement() {
    //2
    Ember.run.next(this, function(){
      //3
    });
  },

  actions: {
    toogleTimeVisibility(isChecked, sectionId, checkboxElement, elementId, afterAction) {
      var timeSelection = document.getElementById("timeSelection");
      var trainerSelectionContainer = document.getElementById("trainer-selection-container");
      if (isChecked === false) {
        timeSelection.style.display = "none";
        trainerSelectionContainer.style.display = "none";
      } else {
        timeSelection.style.display = "block";
        trainerSelectionContainer.style.display = "block";
      }
      this.set('isChecked', isChecked);
      this.get('_target').send(afterAction, elementId, isChecked);
    }
  }
});
