import Ember from "ember";
export default Ember.Component.extend({
  tagName: "",
  data: [
    {
      title: "Free",
      price: "0",
      list: ["this", "that", "those", "them"],
    },
    {
      title: "Basic",
      price: "13",
      list: ["Everything in Free Plan", "that", "those", "them"],
    },
    {
      title: "Business",
      price: "39",
      list: ["Everything in Basic plan", "this", "that", "those", "them"],
    },
  ],
  actions: {},
});
