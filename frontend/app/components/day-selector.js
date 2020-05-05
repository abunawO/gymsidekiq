import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,

  actions: {
    myFunction(isChecked, sectionId, checkboxElement, elementId, afterAction) {
      debugger
      var x = document.getElementById("myDIV");
      if (x.style.display === "") {
        x.style.display = "block";
      } else {
        x.style.display = "block";
      }
      this.set('isChecked', true);
      this.get('_target').send(afterAction, elementId, isChecked);
    }
  }
});
