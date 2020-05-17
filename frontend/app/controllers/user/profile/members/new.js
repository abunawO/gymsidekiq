import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,
  planId: null,
  checkedPlans: [],
  filesArray: [],
  profilePlans: [],

  refreshModel: function(){
    this.set('firstName', ''),
    this.set('lastName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('checkedPlans', []),
    this.set('accept_terms', ''),
    this.set('filesArray', []),
    this.get('checkedPlans').forEach((element)=>{element.prop('checked',false);});

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
    setPlanId(planId, element) {
      //debugger
      this.set('planId', planId);
      this.get('checkedPlans').push(element);
    },

    createNewMember() {
      //debugger
      var member = this.store.createRecord('member', {
        profileId: this.get('profile.id'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        planId: this.get('planId'),
        phone: this.get('phone'),
        image: this.get('filesArray')[0]
      });

      member.save().then((res) => {
        this.refreshModel();
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
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
