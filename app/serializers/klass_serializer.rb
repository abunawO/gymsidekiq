class KlassSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :trainers,
             :members,
             :schedule

 has_many :attendances
 has_many :members
 has_many :trainers
end
