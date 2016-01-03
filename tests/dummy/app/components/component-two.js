import Ember from 'ember';
import SyncScroll from 'ember-sync-scroll-mixin/mixins/sync-scroll';

const {
  Component,
} = Ember;

export default Component.extend(SyncScroll, {
  classNames: ['component', 'component-two'],

  syncScrollFromSelector: '.component-one',
});
