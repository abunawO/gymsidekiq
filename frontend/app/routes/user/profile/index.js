import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:  Ember.inject.service(),
  profile: null,

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
  afterModel(model) {
    //debugger;
  },
  model() {
    let queryParams = {where: { profileId: { value: this.get('profileId'), operator: '==' }}};
    let profileQueryParams = {where: { id: { value: this.get('profileId'), operator: '==' }}};
    let promises = {
      klasses:  this.store.query('klass', queryParams),
      trainers:  this.store.query('trainer', queryParams),
      members:  this.store.query('member', queryParams),
      profiles:  this.store.query('profile', profileQueryParams)
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
        controller.set('profileTrainers', model.trainers);
        controller.set('profileKlasses', model.klasses);
        controller.set('profileMembers', model.members);
      }
    }
  }

});
