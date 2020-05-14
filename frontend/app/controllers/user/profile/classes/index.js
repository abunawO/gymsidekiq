import Controller from "@ember/controller";
import Ember from "ember";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  profileClasses: [],
  classInfo: {},
  classTrainers: [],
  classMembers: [],
  klass: null,

  actions: {
    selectClass(_class) {
      this.set("classTrainers", _class.trainers);
      this.set("classMembers", _class.members);
      this.set("classInfo", {
        title: _class.title,
      });
      this.set("klass", _class);
    },
    updateClassTitle(title) {
      this.set('klass.title', title);
      this.get('klass').save().then((res) => {
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
