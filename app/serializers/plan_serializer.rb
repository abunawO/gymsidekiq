class PlanSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :profile_id,
             :klass_ids,
             :price

has_many :members, embed_in_root: true, serializer: MemberSerializer
has_many :klasses, embed_in_root: true, serializer: KlassSerializer

end
