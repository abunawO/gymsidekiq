import Controller from "@ember/controller";
import Ember from "ember";

export default Ember.Controller.extend({
  profileTrainersList: [],
  selectedTrainer: null,
  profile: null,
  trainerManifest: [
    { type: "firstName", placeholder: "First Name" },
    { type: "lastName", placeholder: "Last Name" },
    { type: "email", placeholder: "Email" },
    { type: "address", placeholder: "Address" },
    { type: "city", placeholder: "City" },
    { type: "state", placeholder: "State" },
    { type: "zip", placeholder: "Zip" },
    { type: "phone", placeholder: "Phone" },
  ],
  actions: {
    selectTrainer(_trainer) {
      this.set("selectedTrainer", _trainer);
    },
    updateTrainerInfo(type, payload) {
      this.set(`selectedTrainer[${type}]`, payload);
      this.get("selectedTrainer")
        .save()
        .then((res) => {
          this.get("flashMessages").success("Plan updated successfully!");
        })
        .catch((err) => {
          this.get("flashMessages").danger("Plan not updated!");
        });
    },
  },
});
