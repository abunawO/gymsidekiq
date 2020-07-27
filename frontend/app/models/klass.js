import DS from "ember-data";
import Model, { belongsTo, hasMany } from "@ember-data/model";

export default DS.Model.extend({
  title: DS.attr(),
  schedule: DS.attr(),
  profileId: DS.attr(),
  profile: DS.belongsTo("profile", { async: false }),
  plan: DS.belongsTo("plan", { async: false }),
  attendances: DS.hasMany("attendance", { inverse: null }),
  trainers: DS.hasMany("trainer", { inverse: null })
});
