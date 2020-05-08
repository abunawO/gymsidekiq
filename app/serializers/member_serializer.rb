class MemberSerializer < ActiveModel::Serializer
  attributes :id,
             :membership_type,
             :first_name,
             :last_name,
             :email,
             :profile_id,
             :address,
             :city,
             :state,
             :zip,
             :phone,
             :membership_type,
             :full_name

  has_many :klasses
  has_many :trainers

  def membership_type
    "membership_type"
  end

  def full_name
    "#{first_name} #{last_name}"
  end

end
