import Ember from "ember";
import config from "../config/environment";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  indexRoutes: ["index", "login.index", "signup.index"],
  profile: null,

  noLayoutNeeded: function () {
    if (this.get("indexRoutes").includes(this.get("currentRouteName"))) {
      return false;
    } else {
      return true;
    }
  }.property("currentRouteName"),

  actions: {
    invalidateSession() {
      //debugger
      this.get("session")
        .invalidate()
        .then(() => {
          window.location.href = config.rootURL;
        });
    }
  }
});
