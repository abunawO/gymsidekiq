class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_many :profiles,  embed_in_root: true, serializer: ProfileSerializer
  has_many :sections,  embed_in_root: true, serializer: SectionSerializer
  has_many :members,   embed_in_root: true, serializer: MemberSerializer
end
