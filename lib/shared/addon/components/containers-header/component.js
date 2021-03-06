import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { tagChoices } from 'ui/models/namespace';
import { uniqKeys } from 'shared/utils/util';
import layout from './template';

export default Component.extend({
  layout,
  scope: service(),

  tags: null,
  simpleMode: false,
  showGroup: true,

  tagName: '',

  allStacks: null,
  init() {
    this._super(...arguments);
    this.set('allStacks', this.get('store').all('stack'));
  },

  actions: {
    setTags(tags) {
      this.set('tags', tags);
    },
  },

  tagChoices: function() {
    let choices = uniqKeys(tagChoices(this.get('allStacks'))).sort();
    if ( !choices.length ) {
      return null;
    }

    return choices;
  }.property('allStacks.@each.tags'),
});
