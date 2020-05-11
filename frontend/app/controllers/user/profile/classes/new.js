import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,

  refreshModel: function(){
    this.set('title', ''),
    this.set('schedule', '')
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
    createNewClass() {
      var klass = this.store.createRecord('klass', {
        profileId: this.get('profile.id'),
        title: this.get('title'),
        schedule: this.get('schedule'),
        isParent: true
      });

      klass.save().then((res) => {
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
