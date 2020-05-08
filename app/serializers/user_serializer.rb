class UserSerializer < ActiveModel::Serializer
  attributes :id, :email
  has_one :profile, embed_in_root: true, serializer: ProfileSerializer
end
