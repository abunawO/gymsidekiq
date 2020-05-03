import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  attrs: {
    members: {
      embedded: 'always'
    },
    profile: {
      embedded: 'always'
    },
    sections: {
      embedded: 'always'
    }
  }
});
