import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profile/trainers/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profile/trainers/new');
    assert.ok(route);
  });
});
