import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  profile: null,
  planId: null,
  checkedPlans: [],
  userid: null,

  refreshModel: function(){
    this.set('profileName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('accept_terms', ''),
    this.set('filesArray', [])
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

    createNewProfile() {
      var profile = this.store.createRecord('profile', {
        profileName: this.get('profileName'),
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        phone: this.get('phone'),
        userId: this.get('userid'),
        image: this.get('filesArray')[0]
      });

      profile.save().then((res) => {
        this.refreshModel();
        window.scrollTo(0,0);
        this.transitionToRoute('user.profile');
        this.get('flashMessages').success('Record created successfully!');
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    },
    setImage(filesArray) {
      this.set('filesArray', filesArray);
    }
  }
});
