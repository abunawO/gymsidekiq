import { helper } from "@ember/component/helper";

export default helper(function equalsIf(params /*, hash*/) {
  return params[0] === params[1] ? true : false;
});
