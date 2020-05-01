class Member < ActiveRecord::Base
  belongs_to :profile
  validates_presence_of  :first_name, :last_name, :email, :profile_id, :address, :city, :state, :zip, :phone, :message => "member is missing one or more fields"
end
