import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  afterSignUpProcess: function() {
    this.store.unloadAll();
    this.transitionToRoute('index')
    this.get('flashMessages').success('Signed up! Please activate your account by following the instructions in the account confirmation email you received to proceed.')
  },
  actions: {
    signUpUser(){
      debugger;
      var user = this.store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password')
      });

      user.save().then((res) => {
        this.get('session')
        .authenticate('authenticator:devise', res.get('email'), res.get('password'))
        .then(() => {
          this.afterSignUpProcess();
         }, (err) => {
           debugger;
           this.afterSignUpProcess();
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
