import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  profile: null,

  init() {
    this._super(...arguments);
    this.set("errors", []);
  },
  afterModel(model) {
    let queryParams = {
      where: {
        id: {
          value: this.get("session.data.authenticated.id"),
          operator: "==",
        },
      },
    };
    let promises = {
      user: this.store.query("user", queryParams),
    };
    return Ember.RSVP.hash(promises).then((user) => {
      if (user.user.arrangedContent.length > 0){
          const myprofile = this.store
            .find("profile", user.user.firstObject.profileId)
            .then((profile) => {
              this.set("profile", profile);
            });
        }
    });
  },

  setupController(controller, model) {
    controller.set('profile', this.get("profile"));
  },

  actions: {
    error(error) {
      if (error) {
        console.log(error.message);
        return true;
      }
    }
  }
});
