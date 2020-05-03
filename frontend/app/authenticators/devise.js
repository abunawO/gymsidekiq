// app/authenticators/devise.js
import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: '/api/v1/users/sign_in'
});
