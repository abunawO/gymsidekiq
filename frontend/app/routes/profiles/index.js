import Route from '@ember/routing/route';

export default Ember.Route.extend({

  model() {
    let promises = {
      profiles: this.store.findAll('profile')
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    //debugger
    this._super(controller, model);
    controller.set('profilesList', model.profiles);
  }

});
