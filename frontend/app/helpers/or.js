import { helper } from "@ember/component/helper";

export default helper(function or(params /*, hash*/) {
  return params[0] ? params[0] : params[1];
});
