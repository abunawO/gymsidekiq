import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profiles/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profiles/index');
    assert.ok(route);
  });
});
