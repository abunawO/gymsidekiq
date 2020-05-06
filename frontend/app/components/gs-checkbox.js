//gs-checkbox is a check component that can do things with its attributes
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "input",
  isChecked: false,
  attributeBindings: ['type', 'checked'],
  type: 'checkbox',
  data: null,
  value: '0',
  callbackAction: '',
  afterAction: '',

  click: function() {
    //debugger
    var elementId = this.get('elementId')
    var checkboxElement = $('input[id=' + elementId + ']')
    var isChecked = checkboxElement.is(':checked')
    var sectionId = this.get('data')
    this.get('_target').send(this.get('callbackAction'), isChecked, sectionId, checkboxElement, elementId, this.get('afterAction'));
  }
});
