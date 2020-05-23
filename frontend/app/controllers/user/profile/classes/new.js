import Ember from 'ember';
import jQuery from 'jquery'

export default Ember.Controller.extend({
  profile: null,
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
    debugger;
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
  }.observes("timetable"),

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
    unFollowCursor() {
      debugger;
      var bx = document.getElementById("timetable-tooltip");
      bx.style.display = "none";
    },
    followCursor() {
      debugger;
      var bx = document.getElementById("timetable-tooltip");
      bx.style.display = "block";
      bx.style.left = event.pageX + "px";
      bx.style.top = event.pageY + "px";
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
