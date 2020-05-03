import Controller from '@ember/controller';
import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
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
        userId: this.get('session.data.authenticated.id'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        phone: this.get('phone')
      });

      profile.save().then((res) => {
        //debugger
        this.transitionToRoute('profiles')
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
