import Ember from "ember";
import jQuery from "jquery";

export default Ember.Controller.extend({
  profileMembersList: [],
  selectedMember: null,
  profile: null,
  filesArray: [],
  actions: {
    selectMember(_member) {
      this.set("selectedMember", _member);
      document.getElementById("members-form").style.display = "block";
    },
    someAction() {
      //debugger
      this.transitionToRoute("profile.members.new");
    },
  },
});
