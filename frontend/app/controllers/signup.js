import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    signUpUser(){
      var user = this.store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password')
      });

      user.save().then((res) => {
        this.get('session')
        .authenticate('authenticator:devise', res.get('email'), res.get('password'))
        .then(() => {
          //debugger
          this.store.unloadAll();

          this.transitionToRoute('index')
          this.get('flashMessages').success('Signed up!')
         }, (err) => {
           //debugger
           this.get('flashMessages').danger('Error creating record!')
         });
      }).catch((err) => {
        this.get('flashMessages').danger('Failed to save user!')
      });
    },
    showPassword(isChecked, elementId, checkboxElement) {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
  }

});
