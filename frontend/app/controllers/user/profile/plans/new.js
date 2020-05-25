import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,
  checkedklasses: [],
  profileklasses: [],
  klassIds: [],

  refreshModel: function(){
    this.set('title', ''),
    this.set('schedule', ''),
    this.set('price', ''),
    this.set('klassIds', [])
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
    createNewPlan() {
      var plan = this.store.createRecord('plan', {
        profileId: this.get('profile.id'),
        title: this.get('title'),
        price: this.get('price'),
        klassIds: this.get('klassIds').toString()
      });

      plan.save().then((res) => {
        this.refreshModel();
        this.transitionToRoute('user.profile.plans');
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
