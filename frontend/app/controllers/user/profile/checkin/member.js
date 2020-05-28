import Controller from "@ember/controller";
import Ember from "ember";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  profileClasses: [],
  profile: null,
  selectedKlass: null,
  format: "YYYYMMDD",
  date: null,

  formattedDate: function() {
    return moment().format('LLLL');
  }.property('selectedKlass'),

  refreshModel: function () {
    this.set("selectedKlass", null);
    this.set("memberId", null);
  },
  actions: {
    selectClass(_class) {
      this.set("selectedKlass", _class);
      document.getElementById("classes-form").style.display = "flex";
    },
    CheckInMember(klass,memberId){
      var attendance = this.store.createRecord('attendance', {
        profileId: this.get('profile.id'),
        memberId: memberId,
        klassId: klass.get('id')
      });

      attendance.save().then((res) => {
        this.refreshModel();
        window.scrollTo(0,0);
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
