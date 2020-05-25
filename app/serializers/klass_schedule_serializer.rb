class KlassScheduleSerializer < ActiveModel::Serializer
  attributes :id,
             :day,
             :klass_id,
             :start_times
end
