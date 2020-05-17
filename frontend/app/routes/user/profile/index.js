import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:  Ember.inject.service(),
  profile: null,

  beforeModel(transition){
    //debugger;
  },
  afterModel(model) {
    //debugger;
  },
  model() {
    let queryParams = {where: { userId: { value: this.get('session.data.authenticated.id'), operator: '==' }}};
    let promises = {
      profiles: this.store.query('profile', queryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    if(this.get("session.data.authenticated.id")){
      if (model.profiles.firstObject == null){
        this.transitionTo('user.profile.new');
      }else {
        controller.set('userProfiles', model.profiles);
        controller.set('profileTrainers', model.profiles.firstObject.trainers);
        controller.set('profileKlasses', model.profiles.firstObject.klasses);
        controller.set('profileMembers', model.profiles.firstObject.members);
        this.set('profile', model.profiles.firstObject )
      }
    }
  }

});
