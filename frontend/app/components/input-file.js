//gs-checkbox is a check component that can do things with its attributes
import Ember from "ember";
import jQuery from "jquery";

export default Ember.Component.extend({
  attributeBindings: ["multiple", "type"],
  tagName: "input",
  type: "file",
  multiple: true,
  filesArray: [],
  callbackAction: null,

  change: function (event) {
    var files = event.target.files;
    for (var i = 0; i < files.length; i++) {
      var file = files.item(i);
      this.set("filesArray", []);
      this.get("filesArray").pushObject(file);
    }
    this.get("_target").send(
      this.get("callbackAction"),
      this.get("filesArray")
    );
  },
});
