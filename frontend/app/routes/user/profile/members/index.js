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
      this.set('profileId', user.user.firstObject.profileId)
    });
  },

  model() {
    let queryParams = {where: { profileId: { value: this.get('profileId'), operator: '==' }}};
    let promises = {
      members: this.store.query('member', queryParams),
      plans:   this.store.query('plan', queryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("profileMembersList", model.members);
    controller.set('profilePlans', model.plans);
  },
});
