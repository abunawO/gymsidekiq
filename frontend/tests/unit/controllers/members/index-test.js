import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | members/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:members/index');
    assert.ok(controller);
  });
});
