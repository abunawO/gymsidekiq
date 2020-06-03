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

  timetabledata: [],
  timeTable: [
    { day: "Mon", hours: [], c: "active" },
    { day: "Tue", hours: [], c: "" },
    { day: "Wed", hours: [], c: "" },
    { day: "Thu", hours: [], c: "" },
    { day: "Fri", hours: [], c: "" },
    { day: "Sat", hours: [], c: "" },
    { day: "Sun", hours: [], c: "" },
  ],
  newTimeTable2: [],

  setHoursTimeTable: function () {
    const temp = this.get("timeTable").map((day) => {
      const startRange = this.hoursOpen[0];
      const endRange = this.hoursOpen[1];
      let tempArray = [];
      for (let i = startRange; i <= endRange; i++) {
        let obj = { status: "inactive" };
        if (i < 12) {
          obj = {
            ...obj,
            hour: (i < 10 ? "0" + i : i) + "AM",
            militaryHour: i,
            hi: "welcome",
            status: "inactive",
          };
        } else {
          obj = {
            ...obj,
            hour: (i > 12 ? i - 12 : 12) + "PM",
            militaryHour: i,
            hi: "welcome",
            status: "inactive",
          };
        }
        tempArray.push(obj);
      }
      return { ...day, hours: tempArray };
    });
    this.set("timeTable", temp);
    // console.log("this temp", temp);
    // console.log("thiss", this.get("timeTable")[this.get("selectedDay")].hours);
  },

  setHoursTimeTableData: function () {
    this.get("timetabledata").forEach((i) => {
      // [6, 10, "6 AM", "10 AM"]
      // [{ day: "Mon", hours: [[6, 10, "6 AM", "10 AM"]] }],
      if (i.day === this.get("selectedDay")) {
        this.set(
          "timeTable",
          this.get("timeTable").map((k, idx) => {
            if (idx === i.day) {
              // console.log(k);
              const newHours = k.hours.map((hoursObject) => {
                let hourActiveBox = "timetable-box-";
                const toActive = i.hours.find((ih, _idx) => {
                  return ih[0] === hoursObject.militaryHour;
                });
                const toDisable = i.hours.find((ih) => {
                  if (ih[1] === hoursObject.militaryHour) {
                  }
                  return (
                    hoursObject.militaryHour > ih[0] &&
                    hoursObject.militaryHour <= ih[1]
                  );
                });
                if (toActive) {
                  return { ...hoursObject, status: "active" };
                }
                if (toDisable) {
                  return { ...hoursObject, status: "disabled" };
                }
                return hoursObject;
              });
              return { ...k, hours: newHours };
            }
            return k;
          })
        );
        console.log("herereer", this.get("timeTable"));
        Ember.run.scheduleOnce("afterRender", this, function () {
          this.get("timeTable")[this.get("selectedDay")].hours.forEach(
            (_hours, _idx) => {
              i.hours.forEach((ih) => {
                console.log(ih[0] === _hours.militaryHour);
                console.log("matching vairables", ih[0], _hours.militaryHour);
                if (ih[0] === _hours.militaryHour) {
                  const me = (document.getElementById(
                    "timetable-box-" + _idx
                  ).style.height = 39 * (ih[1] - ih[0]) + "px");
                  console.log("toActive", me, "timetable-box-" + _idx);
                }
              });
            }
          );
        });
      }
    });
  },
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
    // this.set("avaliableHours", tempArray);
    // console.log(this.get("timeTable")[this.get("selectedDay")].hours);
    // this.set(
    //   "avaliableHours",
    //   this.get("timeTable")[this.get("selectedDay")].hours
    // );
    // console.log("this", this.get("timeTable")[this.get("selectedDay")].hours);
  }.observes("timeTable", "selectedKlass"),
  refreshModel: function () {
    this.set("selectedKlass", null);
    this.set("classTrainers", []);
    document.getElementById("classes-form").style.display = "none";
  },
  actions: {
    /**
     * Used to create time schedule for a class
     *
     * @param hour contains object with the day, the hours, and the status
     * @param index the index of the hour
     */
    selectHour(hour, index) {
      /**
       * hour status is disabled or active
       */
      if (hour.status === "disabled" || hour.status === "active") {
        /**
         * function must stop
         */
        return;
      }
      /**
       * if selectedHour has no values
       */
      if (this.selectedHour.length === 0) {
        /**
         * pass military hour as
         * first index of selectedHour
         */
        this.set("selectedHour", [hour.militaryHour]);
        /**
         * map avaliableHours
         */
        const avaliableHoursStatus = this.avaliableHours.map((i, idx) => {
          /**
           * find selected hour from avaliableHours
           * change status to active
           */
          return idx === index ? { ...i, status: "active" } : i;
        });
        /**
         * find timetable-box childs id of selected hour
         */
        const boxId = event.target.querySelector(".timetable-box").id;
        /**
         * push boxId to second index of selectedHour
         */
        this.set("selectedHour", [...this.selectedHour, boxId]);
        /**
         * update avaliableHours with avaliableHoursStatus
         */
        this.set("avaliableHours", avaliableHoursStatus);
        /**
         * if selectedHour has values
         */
      } else {
        /**
         * map avaliableHours
         */
        const avaliableHoursStatus = this.avaliableHours.map((i) => {
          /**
           * find selected hour and prev hours
           * after hour with status of active
           * change status to disabled
           */
          return i.militaryHour > this.selectedHour[0] &&
            i.militaryHour <= hour.militaryHour
            ? { ...i, status: "disabled" }
            : i;
        });
        /**
         * update avaliableHours with avaliableHoursStatus
         */
        this.set("avaliableHours", avaliableHoursStatus);
        /**
         * ! NEEDS IMPROVEMENT
         * return a boolean
         * does timetable has hours that includes
         * any hours that
         */
        const isTimeAvaliable = this.timetable[this.get("selectedDay")].hours
          .flat()
          .includes(this.selectedHour[0] || hour.militaryHour);
        /**
         * an instance of timetable
         */
        let newTimetable = this.timetable;
        /**
         * if isTimeAvaliable is false
         */
        if (!isTimeAvaliable) {
          /**
           * ! NEEDS IMPROVEMENT
           */
          newTimetable[this.get("selectedDay")].hours = [
            ...this.timetable[this.get("selectedDay")].hours,
            [...this.selectedHour, hour.militaryHour],
          ];
          /**
           * find timetable-box child from active status
           * and set its height based on
           * the current hour - the active hour
           */
          document.getElementById(this.selectedHour[1]).style.height =
            39 * (hour.militaryHour - this.selectedHour[0]) + "px";
        }
        /**
         * update timetable with newTimetable
         */
        this.set("timetable", newTimetable);
        /**
         * reset selectedHour
         */
        this.set("selectedHour", []);
      }
    },
    selectDay(index) {
      this.set("selectedDay", index);
      const newTimetable = this.timetable.map((i, idx) => {
        return { ...i, c: index === idx ? "active" : "" };
      });
      this.set("timetable", newTimetable);
      this.setHoursTimeTable();
      this.setHoursTimeTableData();
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
      console.log(this.get("selectedKlass").schedule);
      this.set("timetabledata", this.get("selectedKlass").schedule);
      this.setHoursTimeTable();
      this.setHoursTimeTableData();
      document.getElementById("classes-form").style.display = "flex";
    },
    updateClass(klass) {
      klass
        .save()
        .then((res) => {
          this.refreshModel();
          this.get("flashMessages").success("Record updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Record not updated!");
        });
    },
    goToNewClass() {
      document.body.style.overflow = "auto";
      this.transitionToRoute("user.profile.classes.new");
    },
    deleteClass(klass) {
      klass.destroyRecord().then(
        () => {
          this.refreshModel();
          window.scrollTo(0, 0);
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
