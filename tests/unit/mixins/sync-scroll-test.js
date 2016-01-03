import Ember from 'ember';
import SyncScrollMixin from '../../../mixins/sync-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | sync scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  let SyncScrollObject = Ember.Object.extend(SyncScrollMixin);
  let subject = SyncScrollObject.create();
  assert.ok(subject);
});
