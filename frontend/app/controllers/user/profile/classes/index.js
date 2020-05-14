import Controller from "@ember/controller";
import Ember from "ember";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  profileClasses: [],
  classInfo: {},
  classTrainers: [],
  classMembers: [],
  profileTrainers: [],
  selectedKlass: null,

  actions: {
    selectClass(_class) {
      this.set("classTrainers", _class.trainers);
      this.set("classMembers", _class.members);
      this.set("classInfo", {
        title: _class.title,
      });
      this.set("selectedKlass", _class);
    },
    updateClassTitle(title) {
      this.set('selectedKlass.title', title);
      this.get('selectedKlass').save().then((res) => {
        this.set("classInfo", {});
        this.get('flashMessages').success('Record updated successfully!')
      }).catch((err) => {
        this.get('flashMessages').danger('Record not updated!')
      });
    },
    createNewClass(title) {
      this.transitionToRoute('user.profile.classes.new')
    }
  }
});
