class Member < ActiveRecord::Base
  belongs_to :profile
  has_many :Attendances
  mount_uploader :image, ImageUploader
end
