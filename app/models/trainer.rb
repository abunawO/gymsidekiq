class Trainer < ActiveRecord::Base
  belongs_to :profile
  has_and_belongs_to_many :klasses
  mount_uploader :image, ImageUploader

end
