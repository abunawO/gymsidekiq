import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default ActiveModelAdapter.extend(DataAdapterMixin,{
  namespace: 'api/v1',
  authorizer: 'authorizer:devise',

  shouldReloadAll: function() {
    return true;
  },
  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  },
  shouldBackgroundReloadRecord: function(store, snapshot) {
    return true;
  },
  shouldBackgroundReloadAll: function(store, snapshot) {
    return true;
  }
});
