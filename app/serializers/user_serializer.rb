class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :profile_id
end
