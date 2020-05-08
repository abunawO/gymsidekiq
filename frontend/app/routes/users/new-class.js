import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:  Ember.inject.service(),
  currentUserId: null,

  model() {
    //debugger
    this.set('currentUserId', this.get('session.data.authenticated.id') )
    let queryParams = {where: { userId: { value: this.get('currentUserId'), operator: '==' }}};
    let promises = {
      klasses: this.store.query('klass', queryParams),
      trainers: this.store.query('trainer', queryParams)
    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    //debugger
    this._super(controller, model);
    controller.set('userKlasses', model.klasses);
    controller.set('trainersList', model.trainers);
  }

});
