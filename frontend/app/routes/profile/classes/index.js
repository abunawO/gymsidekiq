import Route from '@ember/routing/route';

export default Ember.Route.extend({
  session:  Ember.inject.service(),

  beforeModel(transition){
    //debugger;
  },
  afterModel(model) {
    //debugger;
  },
  model() {
    let queryParams = {where: { profileId: { value: this.get('session.data.authenticated.profileId'), operator: '==' }}};
    let promises = {
      classes: this.store.query('klass', queryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('profileClasses', model.classes);
  }

});
