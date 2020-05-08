class KlassSerializer < ActiveModel::Serializer
  attributes :id, :title, :schedule, :profile_id
end
