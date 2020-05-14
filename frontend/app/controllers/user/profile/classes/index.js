import Controller from "@ember/controller";
import Ember from "ember";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  profileClasses: [],
  classInfo: {},
  classTrainers: [],
  classMembers: [],

  actions: {
    selectClass(_class) {
      this.set("classTrainers", _class.trainers);
      this.set("classMembers", _class.members);
      this.set("classInfo", {
        title: _class.title,
      });
    },
  },
});
