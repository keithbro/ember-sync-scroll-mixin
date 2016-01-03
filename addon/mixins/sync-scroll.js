import Ember from 'ember';

const {
  computed,
  Mixin,
} = Ember;

export default Mixin.create({
  $body: computed(
    function() {
      return this.$().closest('body');
    }
  ),

  $syncFrom: computed(
    function() {
      return this.get('$body').find(this.get('syncScrollFromSelector'));
    }
  ),

  didRender() {
    this._super();

    const $this = this.$();

    const $syncFrom = this.get('$syncFrom');
    if ($syncFrom.length) {
      const setScrollTop = this.setScrollTop.bind(null, $this, $syncFrom);
      setScrollTop();
      $syncFrom.on(`scroll.${this.elementId}`, setScrollTop);
    }

    const $syncTo = this.get('$body').find(this.get('syncScrollToSelector'));
    if ($syncTo.length) {
      const setScrollTop = this.setScrollTop.bind(null, $syncTo, $this);
      setScrollTop();
      $this.scroll(setScrollTop);
    }
  },

  setScrollTop($to, $from) {
    $to.scrollTop($from.scrollTop());
  },

  willDestroy() {
    this.get('$syncFrom').off(`scroll.${this.elementId}}`);

    this._super();
  },
});
