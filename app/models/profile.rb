class Profile < ActiveRecord::Base
  belongs_to :user
  has_many :members
  has_many :trainers
  has_many :klasses
  has_many :plans
  mount_uploader :image, ImageUploader
end
