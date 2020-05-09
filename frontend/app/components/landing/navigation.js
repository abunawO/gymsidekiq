import Ember from "ember";
import config from "../../config/environment";
const { service } = Ember.inject;

export default Ember.Component.extend({
  session: Ember.inject.service(),
  toggleNav() {
    document.querySelector(".lan-nav").classList.toggle("active");
  },

  actions: {
    clickaway() {
      document.querySelector(".lan-nav").classList.remove("active");
    },
    logout() {
      this.get("session")
        .invalidate()
        .then(() => {
          window.location.href = config.rootURL;
        });
    },
  },
});
