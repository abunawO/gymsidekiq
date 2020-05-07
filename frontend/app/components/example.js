//time picker component
import Ember from 'ember';

export default Ember.Component.extend({
  callbackAction: '',
  classNames: ['time-picker'],
  elementId: 'time-selector',
  timePickerOptions: { dropdown: true, timeFormat: 'h:mm: p' },

  actions: {
    onChange(selectedTime) {
      //debugger
      var hours = selectedTime.getHours() ; // gives the value in 24 hours format
      var AmOrPm = hours >= 12 ? 'pm' : 'am';
      hours = (hours % 12) || 12;
      var minutes = new Date(selectedTime.getTime()).toISOString().slice(14, -8);
      var finalTime = hours + ":" + minutes + " " + AmOrPm;

      this.get('_target').send(this.get('callbackAction'), finalTime);
    }
  }
});
