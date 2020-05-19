import Route from '@ember/routing/route';

export default Ember.Route.extend({
  session:  Ember.inject.service(),
  profile: null,

  beforeModel(transition){},
  afterModel(model) {},
  model() {
    let queryParams = {id: { id: { value: this.get("session.data.authenticated.id"), operator: '==' }}};
    let promises = {
      user: this.store.query('user', queryParams)
    };

    return Ember.RSVP.hash(promises).then((user) => {
      if (user.user.firstObject.profileId !== null){
          this.store.find("profile", user.user.firstObject.profileId).then((profile) => {
              this.set("profile", profile);
          });
        }
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('profile', this.get('profile'));
  }

});
