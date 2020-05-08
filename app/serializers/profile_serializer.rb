class ProfileSerializer < ActiveModel::Serializer
  attributes :id,
             :user_id,
             :profile_name,
             :email,
             :address,
             :city,
             :state,
             :zip,
             :phone,
             :members_list,
             :sections_list

  has_many :klasses
  has_many :trainers
  has_many :members

  def members_list
    []
  end

  def sections_list
    []
  end
end
