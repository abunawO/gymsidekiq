//gs-checkbox is a check component that can do things with its attributes
import Ember  from "ember";
import jQuery from 'jquery';

export default Ember.Component.extend({
  tagName: "input",
  isChecked: false,
  attributeBindings: ["type", "checked"],
  type: "radio",
  data: null,
  value: "0",
  callbackAction: "",
  afterAction: "",

  click: function () {
    //debugger
    var elementId = this.get("elementId");
    var checkboxElement = $("input[id=" + elementId + "]");
    var isChecked = checkboxElement.is(":checked");
    var planId = this.get("data");
    //uncheck previous checked box
    $('input:radio').not(this).prop('checked', false);
    //check new checked box
    $(checkboxElement).not(this).prop('checked', true);
    this.get("_target").send(
      this.get("callbackAction"),
      planId,checkboxElement
    );
  },
});
