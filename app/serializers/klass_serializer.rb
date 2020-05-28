class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :schedule,
             :profile_id,
             :trainers,
             :members

 has_many :attendances
 has_many :members
 has_many :trainers
end
