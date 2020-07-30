import Ember from 'ember';
import jQuery from 'jquery'
import { isEmpty } from '@ember/utils';

export default Ember.Controller.extend({
  filesArray: [],
  profile: null,

  refreshModel: function(){
    this.set('profileName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('filesArray', [])
  },

  actions: {

    updateProfile(profile) {
      if(!isEmpty(this.get('filesArray'))){profile.set('image', this.get('filesArray')[0]);}
      profile
        .save()
        .then((res) => {
          this.get('profile').reload();
          this.refreshModel();
          window.scrollTo(0, 0);
          this.transitionToRoute('user.profile');
          this.get("flashMessages").success("Profile updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Profile not updated!");
        });
    },
    setImage(filesArray) {
      this.set('filesArray', filesArray);
    }
  }
});
