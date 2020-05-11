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
    //needs profile for id, Membership_plans,
    //debugger;
    let queryParams = {where: { profileId: { value: this.get('session.data.authenticated.profileId'), operator: '==' }}};
    let promises = {
      profile: this.store.query('profile', queryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('profile', model.profile.firstObject);
  }

});
