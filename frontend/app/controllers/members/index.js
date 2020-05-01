import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profileSections: [],
  sectionIds: [],
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
  isChecked: false,
  checkedSections: [],

  refreshModel: function(){
    debugger
    this.set('firstName', ''),
    this.set('lastName', ''),
    this.set('email', ''),
    this.set('address', ''),
    this.set('state', ''),
    this.set('city', ''),
    this.set('zip', ''),
    this.set('phone', ''),
    this.set('accept_terms', ''),
    this.get('checkedSections').forEach((element)=>{element.prop('checked',false);});
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

    setSectionId(isChecked, sectionId, element) {
      //debugger
      this.get('checkedSections').push(element)
      if (isChecked) {
        this.get('sectionIds').push(sectionId)
      }else{
        const index = this.get('sectionIds').indexOf(sectionId);
        if (index > -1) {
          this.get('sectionIds').splice(index, 1);
        }
      }
    },

    createMember() {
      //debugger

      var member = this.store.createRecord('member', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        profileId: 1,
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        phone: this.get('phone'),
        sectionIds: this.get('sectionIds').toString()
      });

      member.save().then((res) => {
        //debugger
        this.refreshModel()
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
