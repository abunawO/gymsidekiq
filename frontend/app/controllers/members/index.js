import Ember from 'ember';
import jQuery from 'jquery'
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  profileSections: [],
  sectionIds: [],
  checkedSections: [],

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
    this.get('checkedSections').forEach((element)=>{element.prop('checked',false);});

  },
  refreshState: function(){
    this.set('currentUserId', this.get('session.data.authenticated.id') )
    let queryParams = {where: { userId: { value: this.get('currentUserId'), operator: '==' }}};
    let promises = {
      members: this.store.query('member', queryParams),
      profileSections: this.store.query('section', queryParams)

    };

    return Ember.RSVP.hash(promises).then((data)=>{
      this.set('membersList', data.members);
      this.set('profileSections', data.profileSections);
    })
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
        userId: this.get('session.data.authenticated.id'),
        email: this.get('email'),
        address: this.get('address'),
        state: this.get('state'),
        city: this.get('city'),
        zip: this.get('zip'),
        phone: this.get('phone'),
        sectionIds: this.get('sectionIds').toString()
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
