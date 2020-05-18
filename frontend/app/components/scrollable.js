import Ember from "ember";
export default Ember.Component.extend({
  mouseEnter() {
    document.body.style.overflow = "hidden";
  },
  mouseLeave() {
    document.body.style.overflow = "auto";
  },
  actions: {},
});
