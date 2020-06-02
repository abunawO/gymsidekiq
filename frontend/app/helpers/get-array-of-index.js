import { helper } from "@ember/component/helper";

export default helper(function getArrayOfIndex(params /*, hash*/) {
  return params[0][params[1]].hours;
});
