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
        this.transitionToRoute('profiles')
        this.get('flashMessages').success('Signed up!')
       }, (err) => {
         //debugger
         this.get('flashMessages').danger('Email or password error.')
       });
    }
  }
});
