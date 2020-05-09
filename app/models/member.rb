class Member < ActiveRecord::Base
  belongs_to :profile
  has_many   :klasses
end
