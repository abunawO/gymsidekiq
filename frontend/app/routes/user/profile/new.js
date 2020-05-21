import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:  Ember.inject.service(),
  userId: null,

  beforeModel(transition){
    this.set('userId', this.get('session.data.authenticated.id') );
  },
  afterModel(model) {
    //debugger;
  },
  model() {
    //debugger
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('userid', this.get('userId'));
    window.scrollTo(0, 0);
  }

});
