class TrainerSerializer < ActiveModel::Serializer
  attributes  :id,
              :first_name,
              :last_name,
              :email,
              :profile_id,
              :address,
              :state,
              :city,
              :zip,
              :phone,
              :profile_id

  has_many :klasses
  has_many :members
end
