import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  //this.route('profile', function() {});
  this.route('profiles', function() {});
  this.route('members', function() {});
  this.route('sections', function() {});

  this.route('user', function() {
    this.route('sign-up');
    this.route('log-in');
  });
});
