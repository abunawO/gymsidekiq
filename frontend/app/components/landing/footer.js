import Ember from "ember";
export default Ember.Component.extend({
  tagName: "",
  items: [
    {
      title: "GYMSIDEKIQ",
      links: [
        { link: "/", title: "Homepage" },
        { link: "/contact", title: "Features" },
        { link: "/contact", title: "Pricing" },
      ],
    },
    {
      title: "SUPPORT",
      details:
        "Do you need help, have a feature request or just need someone to rubber duck with? Get in touch with one of our engineers:",
      links: [{ link: "/contact", title: "Contact Us" }],
    },
    {
      title: "ABOUT US",
      details:
        "GymSidekiq is located in Atlanta GA.",
      links: [
        { link: "/terms", title: "Terms & conditions" },
        { link: "/privacy-policy", title: "Privacy policy" },
      ],
    },
  ],
  socials: [
    { img: "assets/images/socials/facebook.svg", href: "" },
    { img: "assets/images/socials/twitter.svg", href: "" },
    { img: "assets/images/socials/linkedin.svg", href: "" },
  ],
  actions: {},
});
