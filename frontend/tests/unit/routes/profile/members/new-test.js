import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profile/members/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profile/members/new');
    assert.ok(route);
  });
});
