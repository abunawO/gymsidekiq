import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',

  shouldReloadAll: function() {
    //debugger
    return true;
  },
  pathForType: function(type) {
    //debugger
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
