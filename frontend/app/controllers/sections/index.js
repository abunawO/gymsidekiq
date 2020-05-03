import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  sectionsList: [],
  refreshModel: function(){
    //debugger
    this.set('title', ''),
    this.set('profileId', ''),
    this.set('accept_terms', '')
  },

  actions: {
    createSection() {
      //debugger

      var section = this.store.createRecord('section', {
        title: this.get('title'),
        userId: this.get('session.data.authenticated.id'),
      });

      section.save().then((res) => {
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
