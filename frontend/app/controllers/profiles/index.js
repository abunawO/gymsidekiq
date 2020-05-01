import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({

  profilesList: [],

  refreshModel: function(){
    //debugger
    this.set('profileName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('accept_terms',null)
  },

  actions: {
    createProfile() {
      //debugger

      var profile = this.store.createRecord('profile', {
        profileName: this.get('profileName'),
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        phone: this.get('phone')
      });

      profile.save().then((res) => {
        //debugger
        this.refreshModel()
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
