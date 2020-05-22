import Controller from "@ember/controller";
import Ember from "ember";
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  profileClasses: [],
  // classInfo: {},
  classTrainers: [],
  classMembers: [],
  profileTrainers: [],
  selectedKlass: null,
  selectedDay: 0,
  selectedHour: [],
  timetable: [
    // { day: "Mon", hours: [ [6, 9, {size: }], [12, 15], [18, 22] ], c: "active" },
    { day: "Mon", hours: [], c: "active" },
    { day: "Tue", hours: [], c: "" },
    { day: "Wed", hours: [], c: "" },
    { day: "Thu", hours: [], c: "" },
    { day: "Fri", hours: [], c: "" },
    { day: "Sat", hours: [], c: "" },
    { day: "Sun", hours: [], c: "" },
  ],
  hoursOpen: [6, 22],
  // me: [
  //   {
  //     hour: 1,
  //     militaryhour: 1200,
  //     status: "active | inactive | disabled",
  //   },
  // ],
  avaliableHours: [],
  getAvaliableHours: function () {
    const startRange = this.hoursOpen[0];
    const endRange = this.hoursOpen[1];
    let tempArray = [];
    let tableArray = this.timetable[this.selectedDay].hours;
    for (let i = startRange; i <= endRange; i++) {
      const defaults = { militaryHour: i, status: "inactive" };
      if (i < 12) {
        if (i < 10) {
          tempArray.push({ hour: "0" + i + " AM", ...defaults });
        } else {
          tempArray.push({ hour: i + " AM", ...defaults });
        }
      } else if (i === 12) {
        tempArray.push({ hour: i + " PM", ...defaults });
      } else {
        let time = (i * 100 - 1200) / 100;
        if (time < 10) {
          tempArray.push({ hour: "0" + time + " PM", ...defaults });
        } else {
          tempArray.push({ hour: time + " PM", ...defaults });
        }
      }
    }
    tempArray.forEach((i) => {});
    this.set("avaliableHours", tempArray);
  }.observes("timetable", "selectedKlass"),
  refreshModel: function () {
    this.set("selectedKlass", null);
    this.set("classTrainers", []);
  },
  actions: {
    selectHour(hour, index) {
      if (hour.status === "disabled" || hour.status === "active") {
        return;
      }
      if (this.selectedHour.length === 0) {
        this.set("selectedHour", [hour.militaryHour]);
        const avaliableHoursStatus = this.avaliableHours.map((i, idx) => {
          return idx === index ? { ...i, status: "active" } : i;
        });
        const boxId = event.target.querySelector(".timetable-box").id;
        this.set("selectedHour", [...this.selectedHour, boxId]);
        this.set("avaliableHours", avaliableHoursStatus);
      } else {
        const avaliableHoursStatus = this.avaliableHours.map((i) => {
          return i.militaryHour > this.selectedHour[0] &&
            i.militaryHour <= hour.militaryHour
            ? { ...i, status: "disabled" }
            : i;
        });
        this.set("avaliableHours", avaliableHoursStatus);
        const isTimeAvaliable = this.timetable[0].hours
          .flat()
          .includes(this.selectedHour[0] || hour.militaryHour);
        let newTimetable = this.timetable;
        if (!isTimeAvaliable) {
          newTimetable[0].hours = [
            ...this.timetable[0].hours,
            [...this.selectedHour, hour.militaryHour],
          ];
          document.getElementById(this.selectedHour[1]).style.height =
            39 * (hour.militaryHour - this.selectedHour[0]) + "px";
        }
        this.set("timetable", newTimetable);
        this.set("selectedHour", []);
        // newTimetable
        console.log(newTimetable);
      }
    },
    selectDay(index) {
      this.set("selectedDay", index);
      const newTimetable = this.timetable.map((i, idx) => {
        return { ...i, c: index === idx ? "active" : "" };
      });
      this.set("timetable", newTimetable);
    },
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
      this.set("classTrainers", _class.get("trainers"));
      this.set("classMembers", _class.get("members"));
      this.set("selectedKlass", _class);
      // this.set("classInfo", {
      //   title: _class.get('title'),
      // });
      document.getElementById("classes-form").style.display = "flex";
    },
    updateClass(klass) {
      klass
        .save()
        .then((res) => {
          // this.set("classInfo", {});
          this.get("flashMessages").success("Record updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Record not updated!");
        });
    },
    createNewClass() {
      document.body.style.overflow = "auto";
      this.transitionToRoute("user.profile.classes.new");
    },
    deleteClass(klass) {
      klass.destroyRecord().then(
        () => {
          this.refreshModel();
          this.get("flashMessages").success(
            "The Class was has been deleted successfully."
          );
        },
        () => {
          flashMessages.danger("There was an error deleting the Class.");
        }
      );
    },
  },
});
