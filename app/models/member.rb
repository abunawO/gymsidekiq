class Member < ActiveRecord::Base
  belongs_to :profile
  mount_uploader :image, ImageUploader
end
