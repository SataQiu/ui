import { on } from '@ember/object/evented';
import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import C from 'ui/utils/constants';

export default Route.extend({
  model() {
    var store = this.get('store');
    return hash({
      workloads: store.findAll('workload'),
      pods: store.findAll('pod'),
    });
  },

  setDefaultRoute: on('activate', function() {
    this.set(`session.${C.SESSION.CONTAINER_ROUTE}`,'containers');
  }),
});
