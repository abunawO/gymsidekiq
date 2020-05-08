import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | trainers/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:trainers/index');
    assert.ok(route);
  });
});
