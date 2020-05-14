import Ember from 'ember';
import config from '../config/environment';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session:  Ember.inject.service(),
  profile: null,

  actions: {
    somefuction() {
      //debugger
      this.get('session').invalidate().then(() => {window.location.href = config.rootURL;});
    }
  }
});
