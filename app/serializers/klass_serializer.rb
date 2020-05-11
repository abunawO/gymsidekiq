class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :schedule,
             :profile_id,
             :is_parent,
             :trainers,
             :members

end
