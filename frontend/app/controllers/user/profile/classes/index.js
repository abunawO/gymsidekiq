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
  timetable: [
    // {
    //   day: "Mon",
    //   hours: [
    //     [6, 9],
    //     [12, 15],
    //     [18, 22],
    //   ],
    // },
    { day: "Mon", hours: [] },
    { day: "Tue", hours: [] },
    { day: "Wed", hours: [] },
    { day: "Thu", hours: [] },
    { day: "Fri", hours: [] },
    { day: "Sat", hours: [] },
    { day: "Sun", hours: [] },
  ],
  hoursOpen: [6, 22],
  avaliableHours: [],
  getAvaliableHours: function () {
    const startRange = this.hoursOpen[0];
    const endRange = this.hoursOpen[1];
    let tempArray = [];
    for (let i = startRange; i <= endRange; i++) {
      if (i < 12) {
        if (i < 10) {
          tempArray.push("0" + i + " AM");
        } else {
          tempArray.push(i + " AM");
        }
      } else if (i === 12) {
        tempArray.push(i + " PM");
      } else {
        let time = (i * 100 - 1200) / 100;
        if (time < 10) {
          tempArray.push("0" + time + " PM");
        } else {
          tempArray.push(time + " PM");
        }
      }
    }
    this.set("avaliableHours", tempArray);
  }.observes("classInfo"),
  actions: {
    unFollowCursor() {
      var bx = document.getElementById("timetable-tooltip");
      bx.style.display = "none";
    },
    followCursor() {
      var bx = document.getElementById("timetable-tooltip");
      bx.style.display = "block";
      bx.style.left = event.pageX + "px";
      bx.style.top = event.pageY + "px";
    },
    selectClass(_class) {
      this.set("classTrainers", _class.trainers);
      this.set("classMembers", _class.members);
      this.set("selectedKlass", _class);
      this.set("classInfo", {
        title: _class.title,
      });
    },
    updateClassTitle(title) {
      this.set("selectedKlass.title", title);
      this.get("selectedKlass")
        .save()
        .then((res) => {
          this.set("classInfo", {});
          this.get("flashMessages").success("Record updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Record not updated!");
        });
    },
    createNewClass(title) {
      this.transitionToRoute("user.profile.classes.new");
    },
  },
});
