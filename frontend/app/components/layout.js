import Ember from "ember";
export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  name: "",
  sidebarLinks: [
    { title: "Profile", to: "user.profile.index" },
    { title: "Plans", to: "user.profile.plans" },
    { title: "Classes", to: "user.profile.classes" },
    { title: "Trainers", to: "user.profile.trainers" },
    { title: "Members", to: "user.profile.members" },
  ],
  actions: {
    getProfileName() {
      this.store
        .find("profile", this.get("session.data.authenticated.id"))
        .then((user) => {
          this.name = user.profileName;
        });
      return this.name;
    },
  },
});
