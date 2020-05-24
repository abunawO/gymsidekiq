import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,
  selectedHour: [],
  dayClicked: null,
  selectedDay: null,
  currentDay: null,
  isTimeAvaliable: false,
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
  schedule: {
    Mon: null,
    Tue: null,
    Wed: null,
    Thu: null,
    Fri: null,
    Sat: null,
    Sun: null
  },
  hoursOpen: [6, 22],
  avaliableHours: [],
  getAvaliableHours: function () {
    const startRange = this.hoursOpen[0];
    const endRange = this.hoursOpen[1];
    let tempArray = [];
    let tableArray = this.timetable[this.get('selectedDay')].hours;
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
  }.observes("selectedDay"),

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

  actions: {
    setSelectedHour(isChecked, id, checkboxElement, name) {
      var hours = this.get('schedule')[this.get('currentDay')];
      if (hours !== null){
        this.get('schedule')[this.get('currentDay')] = hours + "," + name;
      }else {
        this.get('schedule')[this.get('currentDay')] = name;
      }
    },
    selectDay(days, int){
      this.set("selectedDay", int);
      this.set("currentDay", days['day']);
      const newTimetable = this.timetable.map((i, idx) => {
        return { ...i, c: int === idx ? "active" : "" };
      });
      this.set("timetable", newTimetable);
    },
    createNewClass() {
      var klass = this.store.createRecord('klass', {
        profileId: this.get('profile.id'),
        title: this.get('title'),
        schedule: this.get('schedule'),
        isParent: true
      });

      klass.save().then((res) => {
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
