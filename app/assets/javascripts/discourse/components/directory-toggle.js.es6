import StringBuffer from 'discourse/mixins/string-buffer';
import { iconHTML } from 'discourse/helpers/fa-icon';

export default Ember.Component.extend(StringBuffer, {
  tagName: 'th',
  classNames: ['sortable'],
  rerenderTriggers: ['order', 'asc'],

  renderString(buffer) {

    const icon = this.get('icon');
    if (icon) {
      buffer.push(iconHTML(icon));
    }

    const field = this.get('field');
    buffer.push(I18n.t('directory.' + field));

    if (field === this.get('order')) {
      buffer.push(iconHTML(this.get('asc') ? 'chevron-up' : 'chevron-down'));
    }
  },

  click() {
    const currentOrder = this.get('order'),
          field = this.get('field');

    if (currentOrder === field) {
      this.set('asc', this.get('asc') ? null : true);
    } else {
      this.setProperties({ order: field, asc: null });
    }
  }
});
