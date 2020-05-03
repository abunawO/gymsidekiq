export default Ember.Component.extend({
  tagName: "input",
  isChecked: false,
  attributeBindings: ['type', 'checked'],
  type: 'checkbox',
  data: null,
  value: '0',
  callbackAction: '',

  click: function() {
    var checkboxElement = $('input[id=' + this.get('data') + ']')
    var isChecked = checkboxElement.is(':checked')
    var sectionId = this.get('data')
    this.get('_target').send(this.get('callbackAction'), isChecked, sectionId, checkboxElement);
  }
});
