import Ember from 'ember';

export default Ember.Controller.extend({
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
        profileId: this.get('profileId')
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
