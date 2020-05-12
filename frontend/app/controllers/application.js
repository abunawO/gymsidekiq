import Ember from "ember";
import config from "../config/environment";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.set("errors", []);
  },
  isNotIndex: function () {
    // debugger;
    if (this.get("currentRouteName") !== "index") {
      return true;
    } else {
      return false;
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
    },
    logout() {
      //debugger
      this.get("session")
        .invalidate()
        .then(() => {
          window.location.href = config.rootURL;
        });
    },
  },
});
