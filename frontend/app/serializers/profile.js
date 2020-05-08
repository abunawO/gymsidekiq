import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  attrs: {
    user: {
      embedded: 'always'
    },
    klasses: {
      embedded: 'always'
    },
    trainers: {
      embedded: 'always'
    },
    members: {
      embedded: 'always'
    }
  }
});
