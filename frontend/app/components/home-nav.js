import Ember from 'ember';
import config from '../config/environment';
const { service } = Ember.inject;

export default Ember.Component.extend({
  session:  Ember.inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate().then(() => {window.location.href = config.rootURL;});
    }
  }
});
