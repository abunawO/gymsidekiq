import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,
  selectedHour: [],
  dayClicked: null,
  selectedDay: null,
  currentDay: null,
  isTimeAvaliable: false,
  selectedDay: 0,
  selectedHour: [],
  scheduledHours: [],
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
    if (this.timetable[this.selectedDay]) {
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
    }

  }.observes("timetable", "selectedKlass"),

  refreshModel: function(){
    this.set('title', ''),
    this.set('schedule', '')
  },

  filterMembershipTypeSelection: function(hash){
    //debugger
    Object.keys(hash).forEach(function (key) {
      if (hash[key] !== true) {
          delete hash[key];
      }
    });
    return hash;
  },
  convertToST: function(hours) {
    var timeValue = "";
    if (hours > 0 && hours < 12) {
      timeValue= "" + hours + " A.M";
    } else if (hours > 12) {
      timeValue= "" + (hours - 12) + " P.M";
    } else if (hours == 12) {
      timeValue= "12" + " P.M";
    }
    return timeValue;
  },
  cleanTimesTable: function() {
    this.get('timetable').forEach((item, i) => {
      if(item.hours["length"] > 0){
        item.hours.forEach((item, i) => {
          this.get('scheduledHours').push([this.convertToST(item[0]) + ' to ' + this.convertToST(item[2])]);
        });
        item.hours = this.get('scheduledHours');
        this.set('scheduledHours', []);

      }
    });
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
        const isTimeAvaliable = this.timetable[this.get('selectedDay')].hours
          .flat()
          .includes(this.selectedHour[0] || hour.militaryHour);
        let newTimetable = this.timetable;
        if (!isTimeAvaliable) {
          newTimetable[this.get('selectedDay')].hours = [
            ...this.timetable[this.get('selectedDay')].hours,
            [...this.selectedHour, hour.militaryHour],
          ];
          document.getElementById(this.selectedHour[1]).style.height =
            39 * (hour.militaryHour - this.selectedHour[0]) + "px";
        }

        this.set("timetable", newTimetable);
        this.set("selectedHour", []);
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
      document.getElementById("classes-form").style.display = "flex";
    },
    createNewClass() {
      this.cleanTimesTable();
      var klass = this.store.createRecord('klass', {
        profileId: this.get('profile.id'),
        title: this.get('title'),
        schedule: this.get('timetable'),
        isParent: true
      });

      klass.save().then((res) => {
        this.refreshModel();
        window.scrollTo(0,0);
        this.transitionToRoute('user.profile.classes');
        this.get('flashMessages').success('Record created successfully!')
      }).catch((err) => {
        //debugger
        this.get('flashMessages').danger('Record not created!')
      });
    }
  }
});
