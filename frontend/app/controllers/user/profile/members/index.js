import Ember from "ember";
import jQuery from "jquery";

export default Ember.Controller.extend({
  profileMembersList: [],
  selectedMember: null,
  profile: null,
  filesArray: [],

  refreshModel: function(){
    this.set("selectedMember", null);
    this.set("filesArray", []);
    document.getElementById("member-picture").value = null;
  },

  actions: {
    selectMember(_member) {
      this.set("selectedMember", null);
      this.set("selectedMember", _member);
      document.getElementById("members-form").style.display = "block";
    },
    goToCreateNewMember() {
      //debugger
      this.transitionToRoute("user.profile.members.new");
    },
    setImage(filesArray) {
      this.set("filesArray", filesArray);
    },
    updateMember(member) {
      member.set('image', this.get('filesArray')[0]);
      member.save()
        .then((res) => {
          this.refreshModel();
          this.get("flashMessages").success("Member updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Member not updated!");
        });
    },
    deleteMember(selectedMember) {
      selectedMember.destroyRecord().then(() => {
        this.transitionToRoute('user.profile.members').then(() => {
          this.get('flashMessages').success('The Member was has been deleted successfully.');
        });
      }, () => {
        flashMessages.danger('There was an error deleting the Member.');
      });
    }
  }
});
