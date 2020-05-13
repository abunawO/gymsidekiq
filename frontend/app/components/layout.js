import Ember from "ember";
export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  profileName: null,

  init() {
    this._super(...arguments);
    this.set("errors", []);
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
      if (user.user.firstObject.profileId !== null){
          const myprofile = this.store
            .find("profile", user.user.firstObject.profileId)
            .then((profile) => {
              this.set("profileName", profile.profileName);
            });
        }
    });
  },

  sidebarLinks: [
    { title: "Profile", to: "user.profile.index" },
    { title: "Plans", to: "user.profile.plans" },
    { title: "Classes", to: "user.profile.classes" },
    { title: "Trainers", to: "user.profile.trainers" },
    { title: "Members", to: "user.profile.members" },
  ],
  actions: {
    logout() {
      //debugger
      this.get("session")
        .invalidate()
        .then(() => {
          this.get('flashMessages').success('Goodbye!')
          window.location.href = config.rootURL;
        });
    }
  },
});
