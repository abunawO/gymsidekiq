import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default ActiveModelAdapter.extend(DataAdapterMixin,{
  namespace: 'api/v1',
  authorizer: 'authorizer:devise',

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
