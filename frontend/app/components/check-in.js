import Ember from "ember";
export default Ember.Component.extend({
  tagName: "",
  _status: null,
  didReceiveAttrs() {
    this._super(...arguments);
    if (this.status) {
      this.set("_status", "green");
    } else {
      this.set("_status", "red");
    }
  },
  actions: {},
});
