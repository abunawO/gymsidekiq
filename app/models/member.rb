class Member < ActiveRecord::Base
  belongs_to :profile
  belongs_to :plan
  has_many   :attendances
  mount_uploader :image, ImageUploader
end
