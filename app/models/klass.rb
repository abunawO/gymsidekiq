class Klass < ActiveRecord::Base
  belongs_to :profile
  has_and_belongs_to_many :plans
  has_and_belongs_to_many :trainers
  has_many   :attendances
  has_many   :members, through: :attendances
end
