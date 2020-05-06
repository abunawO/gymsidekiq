import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,

  actions: {
    toogleTimeVisibility(isChecked, sectionId, checkboxElement, elementId, afterAction) {
      var x = document.getElementById("timeSelection");
      if (isChecked === false) {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
      this.set('isChecked', isChecked);
      this.get('_target').send(afterAction, elementId, isChecked);
    }
  }
});
