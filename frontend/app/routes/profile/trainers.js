import Route from '@ember/routing/route';

export default Ember.Route.extend({
  session:  Ember.inject.service(),
  profile: null,

  model() {
    let queryParams = {where: { profileId: { value: this.get('session.data.authenticated.profileId'), operator: '==' }}};
    let promises = {
      profileTrainers: this.store.query('trainer', queryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('profileTrainersList', model.profileTrainers);
  }

});
