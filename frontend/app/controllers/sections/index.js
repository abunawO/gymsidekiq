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
  refreshState: function(){
    this.set('currentUserId', this.get('session.data.authenticated.id') )
    let queryParams = {where: { userId: { value: this.get('currentUserId'), operator: '==' }}};
    let promises = {
      sections: this.store.query('section', queryParams)
    };

    return Ember.RSVP.hash(promises).then((data)=>{
      this.set('sectionsList', data.sections);
    })
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
