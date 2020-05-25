import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:  Ember.inject.service(),
  userId: null,

  beforeModel(transition){
    //debugger;
  },
  afterModel(model) {
    //debugger;
  },
  model() {
    let profileQueryParams = {where: { userId: { value: this.get('session.data.authenticated.id'), operator: '==' }}};
    let promises = {
      profile:  this.store.query('profile', profileQueryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('profile', model.profile.firstObject);
  }

});
