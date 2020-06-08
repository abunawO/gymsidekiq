import Ember from "ember";
export default Ember.Component.extend({
  mouseEnter(event) {
    document.body.style.overflowY = "hidden";
  },
  mouseLeave(event) {
    document.body.style.overflowY = "auto";
  },
  actions: {},
});
