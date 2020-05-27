class Klass < ActiveRecord::Base
  belongs_to :profile
  has_many   :attendances
  has_many :members, through: :attendances
end
