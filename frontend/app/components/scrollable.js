import Ember from "ember";
export default Ember.Component.extend({
  mouseEnter(event) {
    console.log("mouseEnter document is hidden");
    document.body.style.overflow = "hidden";
  },
  mouseLeave(event) {
    console.log("mouseLeave document is auto");
    document.body.style.overflow = "auto";
  },
  actions: {},
});
