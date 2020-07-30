import Ember from 'ember';
import jQuery from 'jquery';
import { isEmpty } from '@ember/utils';

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
    this.set('contractLength', ''),
    document.getElementById("member-picture").value = "",
    this.get('checkedPlan').prop('checked',false)
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
      this.set('planId', planId);
      this.set('checkedPlan', element);
    },

    createNewMember() {
      var memberImage = null
      if(!isEmpty(this.get('filesArray'))){memberImage = this.get('filesArray')[0]}
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
        image: memberImage,
        contractLength: this.get('contractLength')
      });

      member.save().then((res) => {
        this.refreshModel();
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        this.get('flashMessages').danger('Record not created!')
      });
    },
    setImage(filesArray) {
      this.set('filesArray', filesArray);
    }
  }
});
