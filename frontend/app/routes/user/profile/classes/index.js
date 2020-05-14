import Route from '@ember/routing/route';

export default Ember.Route.extend({
  session:  Ember.inject.service(),

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
  afterModel(model) {
    //debugger;
  },
  model() {
    //debugger;
    let queryParams = {where: { profileId: { value: this.get('profileId'), operator: '==' }}};
    let profileQueryParams = {where: { id: { value: this.get('profileId'), operator: '==' }}};
    let promises = {
      classes: this.store.query('klass', queryParams),
      profile: this.store.query('profile', profileQueryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('profileClasses', model.classes);
    controller.set('profileTrainers', model.profile.firstObject.trainers);
  }

});
