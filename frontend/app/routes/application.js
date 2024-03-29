import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  profile: null,

  actions: {
    error(error) {
      if (error) {
        console.log(error.message);
        return true;
      }
    }
  }
});
