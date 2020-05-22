import Ember from "ember";
export default Ember.Component.extend({
  mouseEnter(event) {
    document.body.style.overflow = "hidden";
  },
  mouseLeave(event) {
    document.body.style.overflow = "auto";
  },
  actions: {},
});
