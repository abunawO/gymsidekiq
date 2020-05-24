import Ember  from "ember";
import jQuery from 'jquery';

export default Ember.Component.extend({
  callbackAction: "",
  index: null,
  doubleClick() {
    debugger;
    this.get("_target").send(this.get("callbackAction"), this.get('index'));
  }
});
