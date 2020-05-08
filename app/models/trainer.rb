class Trainer < ActiveRecord::Base
  belongs_to :profile
  has_many   :klasses
  has_many   :members, :through => :klasses
end
