import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  //this.route('profile', function() {});
  this.route('login', function() {});
  this.route('signup', function() {});
  this.route('profile', function() {
    this.route('classes');
    this.route('trainers', function() {});
    this.route('members', function() {});
  });
});
