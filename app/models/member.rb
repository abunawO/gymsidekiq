class Member < ActiveRecord::Base
  belongs_to :profile
  has_many   :klasses
  has_many   :trainers, :through => :klasses
end
