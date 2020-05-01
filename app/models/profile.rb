class Profile < ActiveRecord::Base
  has_many   :members, dependent: :destroy
  has_many   :sections, dependent: :destroy
  validates_presence_of  :profile_name, :email, :address, :city, :state, :zip, :phone, :message => "profile is missing one or more fields"
end
