import Ember from "ember";
import jQuery from "jquery";
import { isEmpty } from '@ember/utils';

export default Ember.Controller.extend({
  profileMembersList: [],
  selectedMember: null,
  profile: null,
  planId: null,
  filesArray: [],
  profilePlans: [],
  plansWithoutMembersPlan: [],
  currentProfilePlans: [],
  checkedPlans: [],

  refreshModel: function () {
    this.set("selectedMember", null);
    this.set("filesArray", []);
    this.set("plansWithoutMembersPlan", []);
    this.set("currentProfilePlans", []);
    this.get('checkedPlans').forEach((element)=>{element.prop('checked',false);});
    document.getElementById("member-picture").value = null;
  },
  getFilteredPlans: function functionName(needsMembersPlan,needsAvialablePlans) {
    var membersPlan = [];
    var availablePlans = [];
    this.get('profilePlans').forEach((plan, i) => {
      if(this.get('selectedMember.membershipType') !== null){
        if (plan.get('title') !== this.get('selectedMember.membershipType')){
            availablePlans.push(plan);
        }else {
          membersPlan.push(plan);
        }
      }
    });
    if (needsMembersPlan){
      return membersPlan;
    }
    if (needsAvialablePlans){
      return availablePlans;
    }
  },

  actions: {
    selectMember(_member) {
      this.set('plansWithoutMembersPlan', []);
      this.set('currentProfilePlans', []);
      this.set("selectedMember", null);
      this.set("selectedMember", _member);
      var membersPlan = this.getFilteredPlans(true,false);
      var availablePlans = this.getFilteredPlans(false,true);
      if(isEmpty(membersPlan)){
        membersPlan.push(false);
        availablePlans = this.get('profilePlans');
      }
      this.set("plansWithoutMembersPlan", membersPlan);
      this.set("currentProfilePlans", availablePlans);
      document.getElementById("members-form").style.display = "block";
    },
    setPlanId(planId, element) {
      this.set('planId', planId);
      this.get('checkedPlans').push(element);
    },
    goToCreateNewMember() {
      document.body.style.overflow = "auto";
      this.transitionToRoute("user.profile.members.new");
    },
    setImage(filesArray) {
      this.set("filesArray", filesArray);
    },
    updateMember(member) {
      if(!isEmpty(this.get('filesArray'))){member.set('image', this.get('filesArray')[0]);}
      member.set('planId', this.get('planId'));
      member.save()
        .then((res) => {
          this.get('selectedMember').reload();
          this.refreshModel();
          window.scrollTo(0, 0);
          this.get("flashMessages").success("Member updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Member not updated!");
        });
    },
    deleteMember(selectedMember) {
      selectedMember.destroyRecord().then(
        () => {
          this.refreshModel();
          window.scrollTo(0, 0);
          this.get("flashMessages").success("The Member was has been deleted successfully.");
        },
        () => {
          flashMessages.danger("There was an error deleting the Member.");
        }
      );
    },
  },
});
