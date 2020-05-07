import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  sectionsList: [],
  time: '',
  sectionTimes: [],
  selectedParentDiv: '',
  checkedParentDiv: '',
  listOfTrainers: ['Amir Dadovic','Ose Abunaw','Brently Fur','Dhiego Lima'],
  timePickerOptions: { dropdown: true, timeFormat: 'h:mm: p' },

  refreshModel: function(){
    //debugger
    this.set('title', ''),
    this.set('profileId', ''),
    this.set('accept_terms', '')
  },
  refreshState: function(){
    this.set('currentUserId', this.get('session.data.authenticated.id') )
    let queryParams = {where: { userId: { value: this.get('currentUserId'), operator: '==' }}};
    let promises = {
      sections: this.store.query('section', queryParams)
    };

    return Ember.RSVP.hash(promises).then((data)=>{
      this.set('sectionsList', data.sections);
    })
  },

  actions: {
    setParentDiv(elementId, isChecked){
      //debugger
      this.set('setParentDiv', elementId);
      this.set('checkedParentDiv', isChecked);
    },
    onChange(selectedTime) {
      //debugger
      var hours = selectedTime.getHours() ; // gives the value in 24 hours format
      var AmOrPm = hours >= 12 ? 'pm' : 'am';
      hours = (hours % 12) || 12;
      var minutes = new Date(selectedTime.getTime()).toISOString().slice(14, -8);
      var finalTime = hours + ":" + minutes + " " + AmOrPm;

      this.send('setSelectedTime', finalTime );
    },
    setSelectedTime(selectedTime) {
      //appends the selected time as a text(p) under the day selected
      this.set('time', selectedTime);

      var node = document.createElement("p");
      node.style.fontSize = "9px";
      node.style.marginBottom = "0";
      var textnode = document.createTextNode(this.get('time'));
      node.appendChild(textnode);
      document.getElementById("timeSelection").firstElementChild.value = "";

      if(this.get('checkedParentDiv')){
        document.getElementById(this.get('setParentDiv') + "-div").appendChild(node);
      }
    },
    createSection() {
      //debugger

      var section = this.store.createRecord('section', {
        title: this.get('title'),
        userId: this.get('session.data.authenticated.id'),
      });

      section.save().then((res) => {
        //debugger
        this.refreshModel()
        this.refreshState()
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
