import Ember from "ember";
import config from "../../config/environment";
const { service } = Ember.inject;

export default Ember.Component.extend({
  tagName: "",
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
          this.get("flashMessages").success("Goodbye!");
          window.location.href = config.rootURL;
        });
    },
  },
});
