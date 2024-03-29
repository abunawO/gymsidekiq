import Ember from "ember";
export default Ember.Component.extend({
  action: '',
  sidebarLinks: [
    { title: "Profile", to: "user.profile.index" },
    { title: "Plans", to: "user.profile.plans" },
    { title: "Classes", to: "user.profile.classes" },
    { title: "Trainers", to: "user.profile.trainers" },
    { title: "Members", to: "user.profile.members" },
    { title: "Update Profile", to: "user.profile.update" },
    { title: "Check-in Member", to: "user.profile.checkin.member" },
  ],
  profile: null,

  init() {
    this._super(...arguments);
    this.set("errors", []);
  },

  actions: {
    logout() {
     this.get("_target").send(this.get("action"));
    }
  },
});
