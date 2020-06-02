import Ember from "ember";
import jQuery from "jquery";

export default Ember.Controller.extend({
  profile: null,
  // Gym Hours from start to finish as military time.
  hoursOpen: [6, 22],
  // day selected from timetable as index
  selectedDay: 0,
  // temporary array to hold info when creating a range
  selectedHour: [],
  //
  scheduledHours: [],
  // entire data
  timetable: [
    // { day: "Mon", hours: [
    //   {hour: 6, militaryHour: 06, status: 'active'}, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
    // ], c: "active" },
    { day: "Mon", hours: [], c: "active" },
    { day: "Tue", hours: [], c: "" },
    { day: "Wed", hours: [], c: "" },
    { day: "Thu", hours: [], c: "" },
    { day: "Fri", hours: [], c: "" },
    { day: "Sat", hours: [], c: "" },
    { day: "Sun", hours: [], c: "" },
  ],

  // timetabledata: [{ day: "Mon", hours: [[6, 10, "6 AM", "10 AM"]] }],
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
  // me: [
  //   {
  //     hour: 1,
  //     militaryhour: 1200,
  //     status: "active | inactive | disabled",
  //   },
  // ],
  // setDaysTimetable = () => {
  //   const dayCount = 0;
  //   while (dayCount <= 7) {
  //     var temp = self.get('timeTable').push({day: ""})
  //     Ember.set(temp, "a", 2);
  //   }
  //   // timeTable
  //     // var temp = self.get('timeTable')
  // },

  convertToMT: function (hours) {
    var timeValue = "";
    if (hours > 0 && hours < 12) {
      timeValue = "" + hours + " A.M";
    } else if (hours > 12) {
      timeValue = "" + (hours - 12) + " P.M";
    } else if (hours == 12) {
      timeValue = "12" + " P.M";
    }
    return timeValue;
  },
  setHoursTimeTable: function () {
    const temp = this.get("timeTable").map((day) => {
      const startRange = this.hoursOpen[0];
      const endRange = this.hoursOpen[1];
      let tempArray = [];
      for (let i = startRange; i <= endRange; i++) {
        let obj = {};
        if (i < 12) {
          obj = {
            hour: (i < 10 ? "0" + i : i) + "AM",
            militaryHour: i,
            status: "inactive",
          };
        } else {
          obj = {
            hour: (i > 12 ? i - 12 : 12) + "PM",
            militaryHour: i,
            status: "inactive",
          };
        }
        tempArray.push(obj);
      }
      tempArray;
      return { ...day, hours: tempArray };
    });
    this.set("timeTable", temp);
  },

  setHoursTimeTableData: function () {
    const temp = this.get("timeTable");
    this.get("timetabledata").forEach((i) => {
      // [6, 10, "6 AM", "10 AM"]
      // [{ day: "Mon", hours: [[6, 10, "6 AM", "10 AM"]] }],
      temp.forEach((k) => {
        if (k.day === i.day) {
          const toActive = k.hours.find((h) => {
            return i.hours.find((ih) => {
              return ih[0] === h.militaryHour;
            });
          });
          const toDisable = k.hours.find((h) => {
            return i.hours.find((ih) => {
              if (ih[1] === h.militaryHour) {
                console.log("draw");
              }
              return ih[0] < h.militaryHour && ih[1] <= h.militaryHour;
            });
          });
          if (toActive) {
            toActive.status = "active";
          }
          if (toDisable) {
            toDisable.status = "disable";
          }
          // console.log("mes", mes);
        }
      });
      // temp.map((k) => {
      //   // {hour: 6, militaryHour: 06, status: 'active'}
      //   if (k.day === i.day) {
      //     return {
      //       ...k,
      //       hours: k.hours.map((m) => {
      //         console.log(i);
      //         console.log(
      //           "found you",
      //           i.hours.find((h) => h[0] === m.militaryHour)
      //         );
      //         // CHANGE STATUS
      //         if (i.hours.find((h) => h[1] === m.militaryHour)) {
      //           console.log("add points");
      //         }
      //         if (i.hours.find((h) => h[0] === m.militaryHour)) {
      //           console.log("add active", { ...m, status: "active" });
      //           return { ...m, status: "active" };
      //         } else if (
      //           i.hours[0] < m.militaryHour &&
      //           i.hours[1] <= m.militaryHour
      //         ) {
      //           console.log("add disabled");
      //           return { ...m, status: "disabled" };
      //         } else {
      //           return m;
      //         }
      //       }),
      //     };
      //   }
      //   return k;
      // });
      // timetable[0].hours.map((k) => {
      //   if (k === i[0]) {
      //     return { ...k, status: "active" };
      //   } else if (i[0] > k && i[1] < k) {
      //     return { ...k, status: "disabled" };
      //   } else if (i[1] === k) {
      //     // change height
      //     return { ...k, status: "disabled" };
      //   } else {
      //     return k;
      //   }
      // });
    });
    console.log(temp);
    this.set("timeTable", temp);
  },

  // initializeTimetable = () => {
  //   // if (this.timetable[this.selectedDay]) {
  //     const startRange = this.hoursOpen[0];
  //     const endRange = this.hoursOpen[1];
  //     let tempArray = [];
  //     for (let i = startRange; i <= endRange; i++) {
  //       let defaults = { militaryHour: i };
  //       if (i < 12) {
  //         if (i < 10) {
  //           tempArray.push({ hour: "0" + i + " AM", ...defaults });
  //         } else {
  //           tempArray.push({ hour: i + " AM", ...defaults });
  //         }
  //       } else if (i === 12) {
  //         tempArray.push({ hour: i + " PM", ...defaults });
  //       } else {
  //         let time = (i * 100 - 1200) / 100;
  //         if (time < 10) {
  //           tempArray.push({ hour: "0" + time + " PM", ...defaults });
  //         } else {
  //           tempArray.push({ hour: time + " PM", ...defaults });
  //         }
  //       }
  //     }
  //     timetableTemp = tempArray;
  //     console.log("temp", timetableTemp);
  //     tempArray.forEach((i) => {});
  //     this.set("avaliableHours", tempArray);
  //   // }
  // },
  // .observes("timetable", "selectedKlass"),
  // timetabledata[0].hours.map(i => {
  //   timetable[0].hours.map(k => {
  //     if (k === i[0]){
  //       return {...k, status: 'active'}
  //     } else if (i[0] > k && i[1] < k) {
  //       return {...k, status: 'disabled'}
  //     } else if (i[1] === k) {
  //       // change height
  //       return {...k, status: 'disabled'}
  //     } else {
  //       return k
  //     }
  //   })
  // }),
  // var temp = self.get('someArray').objectAt(0);
  // Ember.set(temp, "a", 2);

  avaliableHours: [],
  getAvaliableHours: function () {
    if (this.timetable[this.selectedDay]) {
      const startRange = this.hoursOpen[0];
      const endRange = this.hoursOpen[1];
      let tempArray = [];
      // let timetableTemp = this.timetable[this.selectedDay].hours;
      for (let i = startRange; i <= endRange; i++) {
        const defaults = { militaryHour: i, status: "inactive" };
        // const defaults = { militaryHour: i, status: "inactive" };
        // timetableTemp.forEach((k) => {
        //   if (k[0] === i) {
        //     defaults = { militaryHour: i, status: "active" };
        //   } else if (i > k[0] && i < k[2]) {
        //     defaults = { militaryHour: i, status: "disabled" };
        //   } else if (i === k[2]) {
        //     console.log(document.getElementById(k[1]));
        //     document.getElementById(k[1]).style.height =
        //       39 * (k[2] - k[0]) + "px";
        //     defaults = { militaryHour: i, status: "disabled" };
        //   } else {
        //     defaults = { militaryHour: i, status: "inactive" };
        //   }
        // });
        // console.log("i ran this much times");
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
      // timetableTemp = tempArray;
      // console.log("temp", timetableTemp);
      // tempArray.forEach((i) => {});
      this.set("avaliableHours", tempArray);
    }
  }.observes("timetable", "selectedKlass"),

  refreshModel: function () {
    this.set("title", ""), this.set("schedule", "");
  },

  filterMembershipTypeSelection: function (hash) {
    //debugger
    Object.keys(hash).forEach(function (key) {
      if (hash[key] !== true) {
        delete hash[key];
      }
    });
    return hash;
  },
  convertToST: function (hours) {
    var timeValue = "";
    if (hours > 0 && hours < 12) {
      timeValue = "" + hours + " A.M";
    } else if (hours > 12) {
      timeValue = "" + (hours - 12) + " P.M";
    } else if (hours == 12) {
      timeValue = "12" + " P.M";
    }
    return timeValue;
  },
  // cleanTimesTable: function () {
  //   // [{ day: "Mon", hours: [[6, 10, "6 AM", "10 AM"]] }]
  //   this.get("timetable").forEach((item, i) => {
  //     if (item.hours["length"] > 0) {
  //       item.hours.forEach((item, i) => {
  //         this.get("timetabledata").push([
  //           this.convertToST(item[0]) + " to " + this.convertToST(item[2]),
  //         ]);
  //       });
  //       item.hours = this.get("scheduledHours");
  //       this.set("scheduledHours", []);
  //     }
  //   });
  // },
  // cleanTimesTable: function () {
  //   [{ day: "Mon", hours: [[6, 10, "6 AM", "10 AM"]] }]
  //   this.get("timetable").forEach((item, i) => {
  //     if (item.hours["length"] > 0) {
  //       item.hours.forEach((item, i) => {
  //         this.get("scheduledHours").push([
  //           this.convertToST(item[0]) + " to " + this.convertToST(item[2]),
  //         ]);
  //       });
  //       item.hours = this.get("scheduledHours");
  //       this.set("scheduledHours", []);
  //     }
  //   });
  // },
  init(props) {
    this._super(props);
    this.setHoursTimeTable();
    this.setHoursTimeTableData();
    console.log(this.get("timeTable"));
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
        const isTimeAvaliable = this.timetable[this.get("selectedDay")].hours
          .flat()
          .includes(this.selectedHour[0] || hour.militaryHour);
        let newTimetable = this.timetable;
        if (!isTimeAvaliable) {
          newTimetable[this.get("selectedDay")].hours = [
            ...this.timetable[this.get("selectedDay")].hours,
            [...this.selectedHour, hour.militaryHour],
          ];
          const timetabledata_dat = this.get("timetabledata").find(
            (tdata) => tdata.day === this.get("selectedDay")
          );
          if (!timetabledata_dat) {
            console.log("i am not found");
            this.get("timetabledata").push({
              day: this.get("selectedDay"),
              hours: [[this.selectedHour[0], hour.militaryHour]],
            });
          } else {
            console.log("i am found");
            timetabledata_dat.hours.push([
              this.selectedHour[0],
              hour.militaryHour,
            ]);
          }
          console.log("timetabledata_dat", timetabledata_dat);
          // .push({day: "mon", hours: })
          // this.get("timetabledata").push([
          //   this.selectedHour[0],
          //   hour.militaryHour,
          // ]);
          document.getElementById(this.selectedHour[1]).style.height =
            39 * (hour.militaryHour - this.selectedHour[0]) + "px";
        }

        this.set("timetable", newTimetable);
        this.set("selectedHour", []);
      }
    },
    selectDay(index) {
      this.set("selectedDay", index);
      // console.log("1", this.timetable);
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
      document.getElementById("classes-form").style.display = "flex";
    },
    createNewClass() {
      // this.cleanTimesTable();
      var klass = this.store.createRecord("klass", {
        profileId: this.get("profile.id"),
        title: this.get("title"),
        // schedule: this.get("timetable"),
        schedule: this.get("timetabledata"),
        isParent: true,
      });

      klass
        .save()
        .then((res) => {
          this.refreshModel();
          window.scrollTo(0, 0);
          this.transitionToRoute("user.profile.classes");
          this.get("flashMessages").success("Record created successfully!");
        })
        .catch((err) => {
          //debugger
          this.get("flashMessages").danger("Record not created!");
        });
    },
  },
});
