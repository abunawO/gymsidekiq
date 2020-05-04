import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:  Ember.inject.service(),
  currentUserId: null,

  model() {
    this.set('currentUserId', this.get('session.data.authenticated.id') )
    let queryParams = {where: { userId: { value: this.get('currentUserId'), operator: '==' }}};
    let promises = {
      members: this.store.query('member', queryParams),
      profileSections: this.store.query('section', queryParams)

    };

    return Ember.RSVP.hash(promises);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('membersList', model.members);
    controller.set('profileSections', model.profileSections);
  }

});
