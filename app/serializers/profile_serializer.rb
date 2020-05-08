class ProfileSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :profile_name,
             :email,
             :address,
             :city,
             :state,
             :zip,
             :phone

  has_many :klasses
  has_many :trainers
  has_many :members
end
