import Route from "@ember/routing/route";

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel(transition) {
    //debugger;
  },
  afterModel(model) {
    //debugger;
  },

  model() {
    let queryParams = {
      where: {
        profileId: {
          value: this.get("session.data.authenticated.profileId"),
          operator: "==",
        },
      },
    };
    let promises = {
      profile: this.store.query('profile', queryParams),
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    //debugger;
    this._super(controller, model);
    controller.set("profileMembersList", model.profile.firstObject.members);
    controller.set('profile', model.profile.firstObject);
  },
});
