import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user/profile/update', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user/profile/update');
    assert.ok(route);
  });
});
