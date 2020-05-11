import Route from "@ember/routing/route";

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel(transition){
    //debugger;
    let queryParams = {where: { id: { value: this.get('session.data.authenticated.id'), operator: '==' }}};
    let promises = {
      user: this.store.query('user', queryParams)
    };

    return Ember.RSVP.hash(promises).then((user)=>{
      //debugger;
      this.set('profileId', user.user.firstObject.profileId)
    });
  },

  model() {
    let queryParams = {
      where: {
        profileId: {
          value: this.get("profileId"),
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
    var members = []
    if (model.profile.firstObject){
      controller.set("profileMembersList", model.profile.firstObject.members);
      controller.set('profile', model.profile.firstObject);
    }
  },
});