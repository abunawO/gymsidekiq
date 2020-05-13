import Ember from 'ember';
import config from '../config/environment';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  //session: service('session'),
  session:  Ember.inject.service(),
  identification: null,
  password:       null,

  actions: {
    authenticate() {
     //debugger
     let { identification, password } =
      this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password)
      .then(() => {
        //debugger
        this.transitionToRoute('user.profile')
        this.get('flashMessages').success('Welcome!')
       }, (err) => {
         //debugger
         this.get('flashMessages').danger('Email or password error.')
       });
    }
  }
});
