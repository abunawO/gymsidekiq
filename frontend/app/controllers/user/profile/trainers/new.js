import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,
  checkedklasses: [],
  klassIds: [],

  refreshModel: function(){
    this.set('firstName', ''),
    this.set('lastName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('accept_terms', ''),
    this.get('checkedklasses').forEach((element)=>{element.prop('checked',false);});

  },

  filterMembershipTypeSelection: function(hash){
    //debugger
    Object.keys(hash).forEach(function (key) {
      if (hash[key] !== true) {
          delete hash[key];
      }
    });
    return hash;
  },

  actions: {
    setKlassId(isChecked, klassId, element) {
       this.get('checkedklasses').push(element)
       if (isChecked) {
         this.get('klassIds').push(klassId);
       }else{
         const index = this.get('klassIds').indexOf(klassId);
         if (index > -1) {
           this.get('klassIds').splice(index, 1);
         }
       }
     },

    createNewTrainer() {
      //debugger
      var trainer = this.store.createRecord('trainer', {
        profileId: this.get('profile.id'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        klassIds: this.get('klassIds').toString(),
        phone: this.get('phone')
      });

      trainer.save().then((res) => {
        this.refreshModel();
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});