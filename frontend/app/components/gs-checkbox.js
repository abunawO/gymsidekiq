//gs-checkbox is a check component that can do things with its attributes
import Ember  from "ember";
import jQuery from 'jquery';

export default Ember.Component.extend({
  tagName: "input",
  isChecked: true,
  attributeBindings: ["type", "checked"],
  type: "checkbox",
  data: null,
  value: "0",
  callbackAction: "",

  click: function () {
    var elementId = this.get("elementId");
    var name = this.get('name');
    var checkboxElement = $("input[id=" + elementId + "]");
    var isChecked = checkboxElement.is(":checked");
    var id = this.get("data");
    if (this.get('callbackAction')){
      this.get("_target").send(this.get("callbackAction"), isChecked, id, checkboxElement, name);
    }
  },
});
