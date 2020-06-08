import Ember from "ember";
export default Ember.Component.extend({
  tagName: "",
  actions: {
    onfocus() {
      event.currentTarget.parentElement.classList.add("active");
    },
    onblur() {
      event.currentTarget.parentElement.classList.remove("active");
    },
  },
});
