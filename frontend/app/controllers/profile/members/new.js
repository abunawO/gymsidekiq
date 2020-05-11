import Ember from 'ember';
import jQuery from 'jquery'
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  profile: null,
  planId: null,
  checkedPlans: [],

  refreshModel: function(){
    this.set('firstName', ''),
    this.set('lastName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('accept_terms', ''),
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
      //this.get('profile.id')
      var member = this.store.createRecord('member', {
        profileId: this.get('profile.id'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        userId: this.get('session.data.authenticated.id'),
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        planId: this.get('planId'),
        phone: this.get('phone')
      });

      member.save().then((res) => {
        this.refreshModel()
        this.refreshState()
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
