class Member < ActiveRecord::Base
  belongs_to :profile
  has_many :attendances
  has_many :klasses, through: :attendances
  mount_uploader :image, ImageUploader
end
