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
  this.route('user', function() {
    this.route('profile', function() {
      this.route('new');
      this.route('classes', function() {
        this.route('new');
      });
      this.route('trainers', function() {
        this.route('new');
      });
      this.route('members', function() {
        this.route('new');
      });
      this.route('plans', function() {
        this.route('new');
      });
      this.route('update');
    });
  });
});
